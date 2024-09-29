"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Upload, Plus, Trash } from "lucide-react";
import Papa from "papaparse";

type Recipient = {
  amount: string;
  username: string;
};

export default function Component() {
  const [assetType, setAssetType] = useState<"GAS" | "Token">("GAS");
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [newAmount, setNewAmount] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          const parsedRecipients = results.data
            .slice(1)
            .map((row: any) => ({
              amount: row[0],
              username: row[1],
            }))
            .filter(
              (recipient: Recipient) => recipient.amount && recipient.username
            );
          setRecipients([...recipients, ...parsedRecipients]);
        },
        header: true,
      });
    }
  };

  const addRecipient = () => {
    if (newAmount && newUsername) {
      setRecipients([
        ...recipients,
        { amount: newAmount, username: newUsername },
      ]);
      setNewAmount("");
      setNewUsername("");
    }
  };

  const removeRecipient = (index: number) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(updatedRecipients);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-gray-600 dark:text-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Airdrop Configuration
      </h2>

      <div className="mb-6">
        <Label htmlFor="assetType" className="text-gray-700 dark:text-gray-200">
          Asset Type
        </Label>
        <div className="flex mt-2 space-x-4">
          <Button
            onClick={() => setAssetType("GAS")}
            variant={assetType === "GAS" ? "default" : "outline"}
            className={`${assetType === "GAS" ? "bg-[#00E676] hover:bg-[#00C853] text-white" : "text-gray-600 dark:text-gray-300 hover:text-[#00E676] hover:border-[#00E676]"} transition-colors duration-300`}
          >
            GAS
          </Button>
          <Button
            onClick={() => setAssetType("Token")}
            variant={assetType === "Token" ? "default" : "outline"}
            className={`${assetType === "Token" ? "bg-[#00E676] hover:bg-[#00C853] text-white" : "text-gray-600 dark:text-gray-300 hover:text-[#00E676] hover:border-[#00E676]"} transition-colors duration-300`}
          >
            Token
          </Button>
        </div>
      </div>

      {assetType === "Token" && (
        <div className="mb-6">
          <Label
            htmlFor="tokenAddress"
            className="text-gray-700 dark:text-gray-200"
          >
            Token Address
          </Label>
          <Input
            id="tokenAddress"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            placeholder="Enter token address"
            className="mt-2 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-[#00E676] focus:ring-[#00E676] text-gray-800 dark:text-gray-200"
          />
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Recipients
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-700 dark:text-gray-200">
                Amount
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-200">
                Twitter Username
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-200">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipients.map((recipient, index) => (
              <TableRow key={index}>
                <TableCell>{recipient.amount}</TableCell>
                <TableCell>{recipient.username}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => removeRecipient(index)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#00E676] transition-colors duration-300"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />

        <Input
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          placeholder="Amount"
          className="w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-[#00E676] focus:ring-[#00E676] text-gray-800 dark:text-gray-200"
        />
        <Input
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Twitter Username"
          className="w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-[#00E676] focus:ring-[#00E676] text-gray-800 dark:text-gray-200"
        />
        <Button
          onClick={addRecipient}
          className="w-full sm:w-auto flex items-center justify-center bg-[#00E676] hover:bg-[#00C853] text-white transition-colors duration-300"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
      <Button
        onClick={() => fileInputRef.current?.click()}
        variant="outline"
        className="w-full my-4 mx-auto sm:w-auto flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#00E676] hover:border-[#00E676] transition-colors duration-300"
      >
        <Upload className="h-4 w-4  " />
        Upload CSV
      </Button>

      <Button
        variant="outline"
        className="w-full my-4 mx-auto sm:w-auto flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#00E676] hover:border-[#00E676] transition-colors duration-300"
      >
        Generate Guarded Airdrop
      </Button>
    </div>
  );
}
