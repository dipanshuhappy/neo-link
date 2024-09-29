// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "./NeoLink.sol";

contract NeoLinkRaffle {
    using SafeERC20 for IERC20;

    NeoLink public neolink;

    function _setAllowanceIfZero(address tokenAddress, address spender) internal {
        uint256 currentAllowance = IERC20(tokenAddress).allowance(address(this), spender);
        if (currentAllowance == 0) {
            IERC20(tokenAddress).approve(spender, type(uint256).max);
        }
    }

    function batchMakeDeposit(
        address _peanutAddress,
        address _tokenAddress,
        uint8 _contractType,
        uint256 _amount,
        uint256 _tokenId,
        address[] calldata _pubKeys20
    ) external payable returns (uint256[] memory) {
        neolink = NeoLink(_peanutAddress);
        uint256 totalAmount = _amount * _pubKeys20.length;
        uint256 etherAmount;

        if (_contractType == 0) {
            require(msg.value == totalAmount, "INVALID TOTAL ETHER SENT");
            etherAmount = _amount;
        } else if (_contractType == 1) {
            IERC20(_tokenAddress).safeTransferFrom(msg.sender, address(this), totalAmount);
            _setAllowanceIfZero(_tokenAddress, address(neolink));
            etherAmount = 0;
        } else if (_contractType == 2) {
            // revert not implemented
            revert("ERC721 batch not implemented");
        } else if (_contractType == 3) {
            IERC1155(_tokenAddress).safeTransferFrom(msg.sender, address(this), _tokenId, totalAmount, "");
            IERC1155(_tokenAddress).setApprovalForAll(address(neolink), true);
            etherAmount = 0;
        }

        uint256[] memory depositIndexes = new uint256[](_pubKeys20.length);

        for (uint256 i = 0; i < _pubKeys20.length; i++) {
            depositIndexes[i] = neolink.makeSelflessDeposit{value: etherAmount}(
                _tokenAddress, _contractType, _amount, _tokenId, _pubKeys20[i], msg.sender
            );
        }

        return depositIndexes;
    }

    function batchMakeDepositRaffle(
        address _neoLinkAddress,
        address _tokenAddress,
        uint8 _contractType,
        uint256[] calldata _amounts,
        address _pubKey20
    ) external payable returns (uint256[] memory) {
        require(_contractType == 0 || _contractType == 1, "ONLY ETH AND ERC20 RAFFLES ARE SUPPORTED");

        neolink = NeoLink(_neoLinkAddress);
        if (_contractType == 1) {
            _setAllowanceIfZero(_tokenAddress, _neoLinkAddress);
            uint256 totalAmount;
            for (uint256 i = 0; i < _amounts.length; i++) {
                totalAmount += _amounts[i];
            }
            IERC20(_tokenAddress).safeTransferFrom(msg.sender, address(this), totalAmount);
        }

        uint256[] memory depositIndexes = new uint256[](_amounts.length);

        for (uint256 i = 0; i < _amounts.length; i++) {
            uint256 etherAmount;

            if (_contractType == 0) {
                etherAmount = _amounts[i];
            }

            depositIndexes[i] = neolink.makeSelflessDeposit{value: etherAmount}(
                _tokenAddress, _contractType, _amounts[i], 0, _pubKey20, msg.sender
            );
        }

        return depositIndexes;
    }
}
