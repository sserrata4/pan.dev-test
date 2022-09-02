/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  cdss_docs: [
    {
      type: "doc",
      id: "cdss/threat-vault/docs/home",
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "cdss/threat-vault/docs/getstarted",
        },
        {
          type: "doc",
          id: "cdss/threat-vault/docs/authentication",
        },
        {
          type: "doc",
          id: "cdss/threat-vault/docs/api-key-management",
        },
        {
          type: "doc",
          id: "cdss/threat-vault/docs/api-call",
        },
      ],
    },
    {
      type: "category",
      label: "Access Limits",
      items: [
        {
          type: "doc",
          id: "cdss/threat-vault/docs/access-limits/threat-vault",
        },
        {
          type: "doc",
          id: "cdss/threat-vault/docs/access-limits/dns-security",
        },
      ],
    },
    {
      type: "doc",
      id: "cdss/threat-vault/docs/best-practices",
    },
    {
      type: "category",
      label: "Examples",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "cdss/threat Vault API Examples",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-threat-signature-metadata-ips",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-threat-signature-metadata-antivirus",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-threat-signature-metadata",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-threat-signature-history",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-atp-report",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-atp-report-pcap",
            },
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/threat-vault/get-content-release-notes",
            },
          ],
        },
        {
          type: "category",
          label: "DNS Security API Examples",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "cdss/threat-vault/docs/examples/dns-security/request-domain-information",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Response Fields",
      items: [
        {
          type: "doc",
          id: "cdss/threat-vault/docs/response-fields/threat-vault-response-fields",
        },
      ],
    },

    {
      type: "category",
      label: "Security Subscription Release Notes",
      items: [
        {
          type: "doc",
          id: "cdss/threat-vault/docs/release-notes/changelog",
        },
        {
          type: "doc",
          id: "cdss/threat-vault/docs/release-notes/release-notes",
        },
      ],
    },
  ],
  iot_api: [
    {
      type: "category",
      label: "IoT API",
      link: {
        type: "generated-index",
        title: "IoT API",
        slug: "/cdss/iot/iot-api",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cdss/iot/api",
        },
      ],
    },
  ],
  tp_api: [
    "cdss/threat-vault/api/threatapi",
    require("./threat-vault/api/sidebar"),
  ],
  dns_api: [
    {
      type: "category",
      label: "DNS Security API",
      link: {
        type: "generated-index",
        title: "DNS Security API",
        slug: "/cdss/dns-security/api",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cdss/dns-security/api",
        },
      ],
    },
  ],
};
