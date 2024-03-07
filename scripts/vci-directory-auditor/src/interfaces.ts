//
// interfaces
//

export interface IssuerKey {
    kty: string,
    kid: string,
    use: string,
    alg: string,
    crlVersion?: number,
    x5c?: string[]; // Array of base64-encoded DER certificates

}

// issuer info in the directory
export interface TrustedIssuer {
    iss: string,
    name: string,
    canonical_iss?: string,
    website?: string
}

// directory structure
export interface TrustedIssuers {
    participating_issuers: TrustedIssuer[]
}

export interface TlsDetails {
    version: string | undefined,
    cipher: string | undefined,
    kexAlg: string | undefined,
    authAlg: string | undefined,
    pubKeySize: string | undefined,
    compression: string | undefined
}

export interface CRL {
    kid: string,
    method: string,
    ctr: number,
    rids: string[]
}

// issuer log info
export interface IssuerLogInfo {
    // the issuer info
    issuer: TrustedIssuer,
    // the issuer's JWK set
    keys: IssuerKey[],
    // the issuer's default TLS session details
    tlsDetails?: TlsDetails | undefined,
    // the issuer's cert revocation lists (CRLs)
    crls?: CRL[],
    // errors while retrieving the issuer JWK set, if any
    errors?: string[],
    // warnings about issuer configuration (TLS, CORS), if any
    warnings?: string[],
    // timestamp when this entry was collected
    lastRetrieved?: string
}

// Key identifiers (KID) of one issuer
export interface IssuerKids {
    iss: string,
    kids: string[]
}

// directory log, a snapshot of the directory
export interface DirectoryLog {
    // directory URL
    directory: string,
    // retrieval time
    time: string,
    // directory issuers
    issuerInfo: IssuerLogInfo[]
}

// audit log
export interface AuditLog {
    // URL of the audited directory
    directory: string,
    // audit time
    auditTime: string,
    // previous audit time (if available)
    previousAuditTime?: string,
    // count of issuers present in the directory
    issuerCount: number,
    // count of issuers with CRLs
    issuerWithCRLCount: number,
    // count of new issuers since previous audit (if available)
    newIssuerCount?: number,
    // count of new issuers since previous audit (if available)
    deletedIssuerCount?: number,
    // issuers with errors during scan
    issuersWithErrors: IssuerLogInfo[],
    // duplicated key identifiers (KID) in the directory
    duplicatedKids: string[],
    // duplicated issuer URL (iss) in the directory
    duplicatedIss: string[],    
    // duplicated display name in the directory (not prohibited, but good to know)
    duplicatedNames: string[],
    // list of removed key identifiers since last audit (if available); should only
    // occur when the corresponding key is revoked by the issuer
    removedKids?: IssuerKids[]
}
