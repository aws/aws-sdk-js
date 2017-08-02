import {CredentialProviderChain} from '../lib/credentials/credential_provider_chain';

const providerChain = new CredentialProviderChain([]);

const resolvedPromise: Promise<AWS.Credentials> = providerChain.resolvePromise();

providerChain.resolve(() => {});