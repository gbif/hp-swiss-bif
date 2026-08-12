---
klass: "newspost"
title:  "Revue publique Darwin Core - juillet 2026"
date:   2026-08-12
categories: [Annonces, Standards]
lang-ref: fr
background: https://portal-cdn.scnat.ch/asset/7ea195ef-1118-536f-b7f0-459d870bc7e3/SCN_AC25_Posters_C.JPG?b=0f40499f-02c9-54dd-b127-4d8c2af85444&v=18d56fa9-477d-5458-b1bb-fe49fe66c5a5_0&s=KljhMK_SRloMMBCRdTkNrXC1fRs8Bnnd_O7Ztv-QOgl5m8qph9BqwqueBpPUZhwMejRB1tckVb3o_sopqP6bZ5A49x1ShQEHd59PUS8o4wa-76bnIAy_Xs56cyHG7yAuXZbtbDyIHLyE4NDo3B6wyO2uzbbjI39QtxG12gVk6lk&t=2f78dd92-7a22-4f43-a0bf-8326ef689cea&sc=2
preTitle: 12 août 2026
cta:
- text: Official webpage
  href: https://dwc.tdwg.org/public_review/
---
# 1 Introduction

Il s’agit de la première critique publique faisant partie d’un cycle de mise à jour et de publication trois fois par an pour la norme Darwin Core. Elle suit les procédures de modification établies dans la [spécification de maintenance du vocabulaire du TDWG](http://rs.tdwg.org/vms/doc/specification/).

## 1.1 Chronologie

L’examen public comprendra 30 jours (16 juillet - 15 août) de discussions actives durant lesquels les modifications proposées pourront être modifiées, suivi d’une période de 30 jours (16 août - 15 septembre) sans opinion dissidente. Toute proposition sur laquelle un consensus est atteint durant la première période de discussion de 30 jours sera incluse dans ce cycle de mise en place. Les propositions pour lesquelles la dissidence et la discussion se poursuivent au-delà de la première période de 30 jours seront examinées pour le cycle de publication suivant.

Il est prévu que les modifications ayant atteint un consensus dans ce cycle seront publiées début octobre 2026, sous réserve de la ratification par le Comité exécutif, avec un examen public pour le prochain cycle débutant début novembre.

## 1.2 Catégories de changements inclus dans cette revue

En raison de l’examen approfondi du Darwin Core Data Package (DwC-DP) et des additions du Modèle Conceptuel à Darwin Core, un grand nombre d’autres propositions se sont accumulées. Pour contrôler l’ampleur de cette revue, les propositions examinées se sont limitées aux questions survenues à la suite de la revue précédente, aux propositions de mandat associées à l’extension minéralogique du noyau de Darwin, et à la ratification du premier ensemble de schémas construits sur la base du guide DwC-DP. D’autres numéros seront inclus lors du prochain cycle d’évaluation.

## 1.3 Comment participer

Chaque modification proposée est décrite dans un numéro du suivi des problèmes Darwin Core sur GitHub. Pour participer à la discussion d’un changement proposé, entrez un commentaire dans le numéro concernant ce changement. Le groupe de maintenance centrale de Darwin surveillera la discussion et travaillera avec la communauté et les personnes ayant élaboré les propositions afin de les modifier de manière à atteindre un consensus. Si vous avez des questions concernant l’examen, contactez le coordinateur du groupe de maintenance centrale de Darwin à [steve.baskauf@gmail.com](mailto:steve.baskauf@gmail.com) ou tout [membre du groupe de maintenance](https://www.tdwg.org/community/dwc/).

# 2 Modifications proposées par catégorie

Pour faciliter la recherche et les commentaires sur des questions pertinentes pour différentes parties de la communauté, des questions similaires ont été regroupées sous catégories parapluie liées dans les sections suivantes. Pour voir tous les problèmes examinés durant ce cycle sans catégorisation, voir le [premier jalon post-sortie de DwC-DP](https://github.com/tdwg/dwc/issues?q=is%3Aissue%20state%3Aopen%20milestone%3A%22First%20post-DwC-DP%20release%22).

Note : certains [enjeux de cette étape concernent uniquement la maintenance des documents](https://github.com/tdwg/dwc/issues/902) et n’incluent pas les propositions nécessitant un commentaire public.

## 2.1 Propositions d’extension des termes de minéralogie

Plusieurs propositions d’extension de mandat ont été faites à la suite des travaux du groupe de travail sur l’extension de la minéralogie au cours des dernières années. Bien que l’extension serve principalement aux collections de sciences de la Terre, plusieurs de ses mandats ont une application plus large dans les collections botaniques et zoologiques. Les évaluateurs de toutes disciplines sont donc encouragés à commenter.

La partie du travail du Groupe de travail incluse dans cette revue consiste uniquement en des extensions de mandat à Darwin Core. D’autres aspects du travail du Groupe de travail (tels que les vocabulaires contrôlés et les guides) ne sont pas inclus dans cette revue mais pourraient être proposés dans de futures revues. Les termes actuellement proposés pour être ajoutés au carotte de Darwin afin de soutenir l’extension de la minéralogie ont été regroupés sous l’[émission parapluie 900](https://github.com/tdwg/dwc/issues/900).

Le groupe de travail a préparé un [rapport de retour d’expérience et d’expérience d’implémentation des utilisateurs](https://docs.google.com/document/d/1SaX-MOtBA_JNdnoz8b-cwpUYswu48qogLFxVqO4BYeo/edit?usp=sharing) qui fournit un contexte sur la manière dont ils ont établi la portée de leur travail et décrit les tests de mise en œuvre. Veuillez noter que les noms de termes, les IRI et les métadonnées fournis dans le rapport peuvent différer de ce qui est proposé ici, puisque le rapport reflète l’état de leur travail au moment des tests.

## 2.2 Schémas initiaux Darwin Core Data Package (DwC-DP)

À la suite de la discussion qui a eu lieu lors de l’examen public DwC-DP, un consensus a été établi selon lequel les schémas construits sur la base du guide DwC-DP seraient ratifiés dans le cadre de la norme Darwin Core et que le Darwin Core Maintenance Group prendrait la responsabilité de leur développement, les faisant avancer dans le processus d’examen, et les publiant sous forme de ressources versionnées. La révision du premier jet des schémas a lieu durant ce cycle.

Les schémas sont liés au numéro 903. Étant donné que les schémas bruts sont lisibles par machine, ce problème propose également des liens vers deux outils qui faciliteront l’examen du contenu des schémas par les humains.

## 2.3 Directives pour les valeurs des termes du vocabulaire de Humboldt ayant des valeurs booléennes

Plusieurs propositions de termes connexes sont présentes qui précisent comment les valeurs doivent être fournies pour les termes du vocabulaire de Humboldt pour les inventaires écologiques. Ils sont regroupés dans le numéro 901

## 2.4 Corrections des termes liés aux unités

Deux mandats récemment ratifiés comportaient des recommandations de valeur qui n’étaient pas applicables. La proposition du [numéro 925](https://github.com/tdwg/dwc/issues/925) corrige ce problème.

## 2.5 Organisation des termes d’extension de Humboldt au sein de nouvelles classes.

Auparavant, tous les termes d’extension Humboldt étaient organisés au sein de la classe dwc :Event. Cependant, pour une utilisation avec DwC-DP, il est préférable de les organiser au sein des classes de façon à ce qu’elles aient du sens lorsqu’elles sont utilisées avec DwC-DP. Le [numéro générique 933](https://github.com/tdwg/dwc/issues/933) contient des sous-numéros organisant les termes de Humboldt en conséquence.

## 2.6 Numéros restants ne retombant pas dans les catégories précédentes
Les numéros restants non inclus dans les catégories ci-dessus peuvent être filtrés via [ce lien](https://github.com/tdwg/dwc/issues?q=is%3Aissue%20state%3Aopen%20milestone%3A%22First%20post-DwC-DP%20release%22%20-parent-issue%3Atdwg%2Fdwc%23900%20-parent-issue%3Atdwg%2Fdwc%23901%20-parent-issue%3Atdwg%2Fdwc%23902%20-parent-issue%3Atdwg%2Fdwc%23903%20-parent-issue%3Atdwg%2Fdwc%23933).
