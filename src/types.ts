export interface IModal {
    title: string;
    content: string;
    theme?: string;
}

export interface IModalEmits {
  (event: "close"): void;
  // (event: 'update', id: number): void;
}