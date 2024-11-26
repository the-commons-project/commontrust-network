# Public key endpoint security recommendations & best practices

Issers of SMART Health Cards publish their public keys as JSON Web Key Sets,  at <<iss value from JWS>> + /.well-known/jwks.json. The  `iss` base url is read by a verifier app from the card. This public key is used by verifiers to validate the SMART Health Card issuer. See [Determining keys associated with an issuer](https://spec.smarthealth.cards/#determining-keys-associated-with-an-issuer) and [Trust](https://spec.smarthealth.cards/#trust) in the SMART Health Cards specification.
  
VCI strongly recommends that issuers comply with the following security best practices or greater, for this https public key endpoint. These requirements are collated from Apple's App Transport Security (ATS) requirements and [OpenSSL Security Level 2 requirements](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_security_level.html), which are subject to change. Apple's ATS and OpenSSL 1.1's security level 2 are authoritative, not the below. 
  
1. Endpoint support Transport Layer Security (TLS) version TLS 1.2 or greater. 
2. HTTPS TLS endpoint uses a SHA-256 Cert with a 2048-bit RSA key or 256-bit ECC key length or greater.
3. One of the following cipher suites must be available: 
  * TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 
  * TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 
  * TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 
  * TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA 
  * TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 
  * TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA 
  * TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 
  * TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 
  * TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 
  * TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 
  * TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA 
1. Certificate expiration complies with the following: 
  * No certificate issued after July 1st, 2019, can have a total lifetime of more than 825 days 
  * No widely trusted certificate after September 1st, 2020, can have a total lifetime of more than 398 days 
1. The hostname the application is hitting must be a Subject Alternative Name (SAN) on the SSL certificate. 
  * Note that Common Name is not trusted 

 ## Apple's App Transport Security requirements
 * [Requirement for connecting using ATS](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW57)
 * Certificate Expiration validity, for certificates [issued after July 1, 2019](https://support.apple.com/en-us/HT210176) and [after September 1, 2020](https://support.apple.com/en-us/HT211025)
* [Certificate Subject Alternative Name (SAN) requirement](https://support.apple.com/en-us/HT210176) 
