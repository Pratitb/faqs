export interface FaqHeaderType {
	title?: string;
}
export interface AccordionType {
	title?: string;
	content?: string;
	getActionFn?: () => void;
	isOpen?: boolean;
}
export interface ContextType {
	children?: React.ReactNode;
}
export interface AccordionContextType {
	accordionIndex: number | null;
	updateAccordionIndex: (index: number) => void;
}
export interface AccordionDataType {
	title?: string;
	content?: string;
}
