import { ProgramNode } from '@universal-robots/contribution-api';

export interface PapPgWeldPathNode extends ProgramNode {
    type: string;
    parameters?: {
        [key: string]: unknown;
    };
    lockChildren?: boolean;
    allowsChildren?: boolean;
}
