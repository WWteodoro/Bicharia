import shortid from 'shortid';

export function createUUID() {
    return shortid.generate();
}

