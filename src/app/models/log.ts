export interface Log {
  id: number;
  actionType: string;
  clientId?: number | null;
  message: string;
  createdAtUtc: string;
}
