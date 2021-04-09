import { storage, logging } from "near-sdk-as";

// --- contract code goes below

export function incrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function incrementStarCounter(accoutId: string, value: i32): void {
  const newCounter = storage.getPrimitive<i32>(accoutId, 0) + value;
  storage.set<i32>("accoutId", newCounter);
  logging.log("accoutId star Counter is now: " + newCounter.toString());
}


export function decrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) - value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function decrementStarCounter(accoutId: string, value: i32): void {
  const newCounter = storage.getPrimitive<i32>(accoutId, 0) - value;
  storage.set<i32>("counter", newCounter);
  logging.log("accoutId star Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}

export function getStarCounter(text: string): i32 {
  return storage.getPrimitive<i32>(text, 0);
}

export function resetCounter(): void {
  storage.set<i32>("counter", 0);
  logging.log("Counter is reset!");
}

export function resetStarCounter(text: string): i32 {
  return storage.getPrimitive<i32>(text, 0);
}

