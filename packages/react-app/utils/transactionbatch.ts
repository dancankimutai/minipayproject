// const { BrowserProvider, Transaction } = require("ethers");


// // Get the provider from the window object

// const provider = new BrowserProvider();

// export class TransactionBatch {
//     transactions: Array<typeof Transaction>;
//     signedBatchTxn!: TransactionBatch;
//     provider: ethers.BrowserProvider;


//     // Define a constructor that takes an array of transactions
//     constructor(transactions:Array<typeof Transaction>) {
//         this.transactions = transactions;
//         provider: BrowserProvider;
//     }

//     async sign() {
//         // Get the signer for the first account from the provider
//         const signer = await provider.getSigner(0);

//         // Sign each transaction in the batch using the signer
//         const signedTransactions = await Promise.all(
//             this.transactions.map(async (transaction) => {
//                 // Sign the transaction and get a string
//                 let signedTxn = await signer.signTransaction(transaction);

//                 // Parse the string into a transaction object
//                 return ethers.utils.parseTransaction(signedTxn);
//             })
//         );
//         // Return a signed batch transaction.
//         return new TransactionBatch(signedTransactions);
//     }
//     async submit() {
//         // Loop through the array of signed transactions
//         for (let i = 0; i < this.transactions.length; i++) {
//             // Send each signed transaction using the provider
//             let txHash = await this.provider.sendTransaction(
//                 this.transactions[i]
//             );

//             // Wait for the transaction confirmation and get the receipt
//             let receipt = await this.provider.waitForTransaction(txHash);

//             // Log the receipt
//             console.log(receipt);
//         }
//         // Return a message indicating success
//         return "All transactions submitted successfully";
//     }


//     async send() {
//         // Sign the batch transaction.
//         this.signedBatchTxn = await this.sign();

//         // Send the signed batch transaction.
//         const receipt = await this.signedBatchTxn.submit();

//         // Return the transaction receipt.
//         return receipt;
//     }
// }
