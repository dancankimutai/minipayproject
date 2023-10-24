import { BrowserProvider, Contract, parseEther } from "ethers";
const CUSD_ADDRESS = "0x765de816845861e75a25fca122bb6898b8b1282a";///cusd contract address
const FEE_AMOUNT = parseEther("0.2"); // Fee amount in CUSD
const MY_ADDRESS = "0xca925951c1f0fae8cc506505cbaf4c8aa26635d8";

export const transferCUSD = async (address: string, userAddress: string ,amount: string) => {
     if (window.ethereum) {
//Get connected accounts, if not connected request connection. 
        const provider = new BrowserProvider(window.ethereum); 
        const signer = await provider.getSigner(userAddress);
        
// The current selected account out of the connected accounts.
        let abi =["function transfer(address to, uint256 value)"]; 
        const CUSDContract = new Contract (CUSD_ADDRESS, abi, signer);

        // Calculate the fee amount.
        const fee = FEE_AMOUNT;

    // Transfer the fee amount to your address.
        const feeTxn = await CUSDContract.transfer(MY_ADDRESS, fee);
        let feeReceipt = await feeTxn.wait();

    // Transfer the remaining amount to the external address.
        let txn = await CUSDContract.transfer(address, (parseEther(amount) - fee));
        let receipt = await txn.wait();
}};