<<<<<<< HEAD

// import {utils} from 'ethers';

// const keccak256 = utils.keccak256;
// const sha256 = utils.sha256;
// const toUtf8Bytes = utils.toUtf8Bytes;
// const recoverAddress = utils.recoverAddress;
// const SigningKey = utils.SigningKey;
// const AbiCoder = utils.AbiCoder;

import {keccak256} from 'ethers/utils/keccak256';
import {sha256} from 'ethers/utils/sha2';
import {AbiCoder} from 'ethers/utils/abi-coder';
const recoverAddress = ''
const SigningKey = ''
const toUtf8Bytes = ''
=======
import { utils } from "ethers";

const keccak256 = utils.keccak256;
const sha256 = utils.sha256;
const toUtf8Bytes = utils.toUtf8Bytes;
const toUtf8String = utils.toUtf8String;
const recoverAddress = utils.recoverAddress;
const SigningKey = utils.SigningKey;
const AbiCoder = utils.AbiCoder;
>>>>>>> origin/master

export {
    keccak256,
    sha256,
    toUtf8Bytes,
    toUtf8String,
    recoverAddress,
    SigningKey,
    AbiCoder,
};
