//
// Copyright 2024 Signal Messenger, LLC.
// SPDX-License-Identifier: AGPL-3.0-only
//

import { PrivateKey } from './EcKeys';

const TRUST_ROOT_PRIVATE_BYTES = new Uint8Array(
  Buffer.from('IC+LJRVDarAqE/NJqX9Y6ZI1gBvOX2ThLZCMnblN11k=', 'base64')
);

/**
 * Sealed Sender trust root key pair generated for testing.
 * The public key is exported for client validation, and the private key
 * is available for signing server certificates in tests.
 */
export const SEALED_SENDER_TRUST_ROOT_PRIVATE = PrivateKey.deserialize(
  TRUST_ROOT_PRIVATE_BYTES
);

export const SEALED_SENDER_TRUST_ROOT_PUBLIC =
  SEALED_SENDER_TRUST_ROOT_PRIVATE.getPublicKey();

