import {CredentialProviderChain} from '../lib/credentials/credential_provider_chain';
import {Credentials} from "../lib/credentials";

const providerChain = new CredentialProviderChain([]);

providerChain.resolvePromise().then(
    (creds: Credentials) => {},
    err => {}
);

providerChain.resolve(() => {});

const providerChainNoArgs = new CredentialProviderChain();
