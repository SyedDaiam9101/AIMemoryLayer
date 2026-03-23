export type MemoryRecord = {
  id: string;
  content: string;
  metadata: Record<string, any>;
};

export async function fetchMemories(ownerId: string, query: string) {
  return [];
}
export async function createMemory(input: any) {
  return {};
}