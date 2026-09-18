// Yhteinen projektidata: käytetään sekä /projects-listauksessa
// että yksittäisten projektien /projects/[slug]-sivuilla.

import { portfolioSivusto } from "./projectsData/portfolio-sivusto";
import { dataFactory } from "./projectsData/data-factory";
import { socialMediaAnalyser } from "./projectsData/social-media-analyser";
import { powerBiAzureSql } from "./projectsData/power-bi-azure-sql";
import { tyollisyysPowerbi } from "./projectsData/tyollisyys-powerbi";
import { puutarhaYritys } from "./projectsData/puutarha-yritys";
import { powerAutomateHyvaksynta } from "./projectsData/power-automate-hyvaksynta";
import { bensis } from "./projectsData/bensis";
import { sieniopas } from "./projectsData/sieniopas";
import { yhteydenottolomake } from "./projectsData/yhteydenottolomake";
import { testausprosessit } from "./projectsData/testausprosessit";
import { dataAnalyysiagentti } from "./projectsData/data-analyysiagentti";

export const projects = [
  portfolioSivusto,
  dataFactory,
  socialMediaAnalyser,
  powerBiAzureSql,
  tyollisyysPowerbi,
  puutarhaYritys,
  powerAutomateHyvaksynta,
  bensis,
  sieniopas,
  yhteydenottolomake,
  testausprosessit,
  dataAnalyysiagentti,
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
