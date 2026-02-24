/// <reference lib="webworker" />
import {
    AdvancedTranslatedProgramLabel,
    InsertionContext,
    OptionalPromise,
    ProgramBehaviors,
    ProgramNode,
    registerProgramBehavior,
    ScriptBuilder,
    ValidationContext,
    ValidationResponse
} from '@universal-robots/contribution-api';
import { PapPgWeldReplayNode } from './pap-pg-weld-replay.node';

// programNodeLabel is required
const createProgramNodeLabel = (node: PapPgWeldReplayNode): AdvancedTranslatedProgramLabel => {
    return [
        {
            type: 'primary',
            translationKey: 'program-node-labels.pap-pg-weld-replay.nodeTitle',
        },
        {
            type: 'secondary',
            translationKey: 'program-node-labels.pap-pg-weld-replay.subTitle',
            interpolateParams: { dynamicValue: 'some dynamic value' },
        },
    ];
};

// factory is required
const createProgramNode = (): OptionalPromise<PapPgWeldReplayNode> => ({
    type: 'pc-gae-pap-pap-pg-weld-replay',
    version: '1.0.0',
    lockChildren: false,
    allowsChildren: false,
    parameters: {
    },
});

// generateCodeBeforeChildren is optional
const generateScriptCodeBefore = (node: PapPgWeldReplayNode): OptionalPromise<ScriptBuilder> => new ScriptBuilder();

// generateCodeAfterChildren is optional
const generateScriptCodeAfter = (node: PapPgWeldReplayNode): OptionalPromise<ScriptBuilder> => new ScriptBuilder();

// generateCodePreamble is optional
const generatePreambleScriptCode = (node: PapPgWeldReplayNode): OptionalPromise<ScriptBuilder> => new ScriptBuilder();

// validator is optional
const validate = (node: PapPgWeldReplayNode, validationContext: ValidationContext): OptionalPromise<ValidationResponse> => ({
    isValid: true
});

// allowsChild is optional
const allowChildInsert = (node: ProgramNode, childType: string): OptionalPromise<boolean> => true;

// allowedInContext is optional
const allowedInsert = (insertionContext: InsertionContext): OptionalPromise<boolean> => true;

// upgradeNode is optional
const nodeUpgrade = (loadedNode: ProgramNode): ProgramNode => loadedNode;

const behaviors: ProgramBehaviors = {
    programNodeLabel: createProgramNodeLabel,
    factory: createProgramNode,
    generateCodeBeforeChildren: generateScriptCodeBefore,
    generateCodeAfterChildren: generateScriptCodeAfter,
    generateCodePreamble: generatePreambleScriptCode,
    validator: validate,
    allowsChild: allowChildInsert,
    allowedInContext: allowedInsert,
    upgradeNode: nodeUpgrade
};

registerProgramBehavior(behaviors);
