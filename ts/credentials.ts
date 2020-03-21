import {Credentials} from '../lib/credentials';

const creds = new Credentials({
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
});

creds.get(err => {

});

creds.getPromise().then(
    () => {},
    err => {},
);

if (creds.needsRefresh()) {
    creds.refresh((err = undefined) => {

    });

    creds.refreshPromise().then(
        () => {},
        err => {}
    );
}
