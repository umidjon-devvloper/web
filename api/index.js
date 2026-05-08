import { handler as archives } from './_handlers/archives.js';
import { handler as blockLists } from './_handlers/block-lists.js';
import { handler as carbon } from './_handlers/carbon.js';
import { handler as cookies } from './_handlers/cookies.js';
import { handler as dnsServer } from './_handlers/dns-server.js';
import { handler as dns } from './_handlers/dns.js';
import { handler as dnssec } from './_handlers/dnssec.js';
import { handler as features } from './_handlers/features.js';
import { handler as firewall } from './_handlers/firewall.js';
import { handler as getIp } from './_handlers/get-ip.js';
import { handler as headers } from './_handlers/headers.js';
import { handler as hsts } from './_handlers/hsts.js';
import { handler as httpSecurity } from './_handlers/http-security.js';
import { handler as legacyRank } from './_handlers/legacy-rank.js';
import { handler as linkedPages } from './_handlers/linked-pages.js';
import { handler as mailConfig } from './_handlers/mail-config.js';
import { handler as ports } from './_handlers/ports.js';
import { handler as quality } from './_handlers/quality.js';
import { handler as rank } from './_handlers/rank.js';
import { handler as redirects } from './_handlers/redirects.js';
import { handler as robotsTxt } from './_handlers/robots-txt.js';
import { handler as screenshot } from './_handlers/screenshot.js';
import { handler as securityTxt } from './_handlers/security-txt.js';
import { handler as sitemap } from './_handlers/sitemap.js';
import { handler as socialTags } from './_handlers/social-tags.js';
import { handler as ssl } from './_handlers/ssl.js';
import { handler as status } from './_handlers/status.js';
import { handler as techStack } from './_handlers/tech-stack.js';
import { handler as threats } from './_handlers/threats.js';
import { handler as tls } from './_handlers/tls.js';
import { handler as traceRoute } from './_handlers/trace-route.js';
import { handler as txtRecords } from './_handlers/txt-records.js';
import { handler as whois } from './_handlers/whois.js';

const routes = {
  'archives': archives,
  'block-lists': blockLists,
  'carbon': carbon,
  'cookies': cookies,
  'dns-server': dnsServer,
  'dns': dns,
  'dnssec': dnssec,
  'features': features,
  'firewall': firewall,
  'get-ip': getIp,
  'headers': headers,
  'hsts': hsts,
  'http-security': httpSecurity,
  'legacy-rank': legacyRank,
  'linked-pages': linkedPages,
  'mail-config': mailConfig,
  'ports': ports,
  'quality': quality,
  'rank': rank,
  'redirects': redirects,
  'robots-txt': robotsTxt,
  'screenshot': screenshot,
  'security-txt': securityTxt,
  'sitemap': sitemap,
  'social-tags': socialTags,
  'ssl': ssl,
  'status': status,
  'tech-stack': techStack,
  'threats': threats,
  'tls': tls,
  'trace-route': traceRoute,
  'txt-records': txtRecords,
  'whois': whois,
};

export default async (req, res) => {
  const route = req.query.route;
  const handler = routes[route];
  if (!handler) {
    return res.status(404).json({ error: `Unknown API route: ${route}` });
  }
  return handler(req, res);
};
