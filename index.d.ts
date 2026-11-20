import { EventEmitter } from 'node:events';
export declare const Events: Readonly<Record<string, string>>;
export declare class Client extends EventEmitter {
  options: Readonly<Record<string, unknown>>; connected: boolean;
  connect(): Promise<never>; disconnect(): Promise<void>;
  registerAdapter(adapter: Record<string, (...args: unknown[]) => unknown>): this;
  invoke(method: string, ...args: unknown[]): Promise<unknown>;
}
export declare function createClient(options?: Record<string, unknown>): Client;
export declare class JabedFCAError extends Error {}
export declare class NotImplementedError extends JabedFCAError {}
export declare class AdapterError extends JabedFCAError {}
export declare class TimeoutError extends JabedFCAError {}
export declare class SessionError extends JabedFCAError {}
