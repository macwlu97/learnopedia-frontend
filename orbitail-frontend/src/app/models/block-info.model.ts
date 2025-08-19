export interface BlockInfo {
  id: string;
  blockNumber: string; // BigInteger in Java → string in JSON
  fetchedAt: string;   // ISO 8601 string
}
