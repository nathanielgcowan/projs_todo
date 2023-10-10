'use client'
import React, { useState } from "react";

export default function App() {
  const [array, setArray] = useState([
    {
      nation: 'USA',
      data: [
        {
          population: 35485000,
          percentageofworld: 4.2,
          date: "9 Oct 2023",
          source: 'National annual projection',
          fullname: "United States of America",
          motto: "In God We Trust",
          anthem: "The Star-Spangled Banner",
          capital: "Washington, D.C",
          largestcity: "New York City",
          Officiallanguages: "none at the federal level",
          nationallanguage: "English",
          flag: 'flag',
          demonym: "American",
          government: "Federal presidential constitutional republic",
          president: "Joe Biden",
          vicePresident: "Kamala Harris",
          houseSpeaker: "Vacant",
          chiefJustice: "John Roberts",
          gini: 39.4,
          hdi: 0.921,
          currency: "U.S. dollar",
          dateFormat: "mm/dd/yyyy",
          drivingSide: "right",
          callingCode: "+1",
          iso3166code: 'US',
          internetTLD: 'us',
          origin: [
            {
              nonHispanicOrLatino: 81.3,
              hispanicOrLatino: 18.7
            }
          ],
          religion: [{
            christianity: [{
              Protestantism: 40,
              Catholicism: 21,
              other: 2
            }],
            unaffiliated: 29,
            Buddhism:1,
            Hinduism: 1,
            Islam: 1,
            Judaism: 1,
            Other: 2,
            unanswered: 2
          }],
          timeZone: [{
            timeZone: "	UTC−4 to −12, +10, +11",
            summer: "UTC−4 to −10[g]"
          }],
          independencefromGreatBritain: [{
            declaration: 'July 4, 1776',
            confederation: 'March 1, 1781',
            recognized: 'September 3, 1783',
            constitution: 'June 21, 1788',
            lastAmendment: 'May 5, 1992'
          }],
          area: [{
            totalarea: 379674,
            water: 4.66,
            landarea: 3531905
          }],
          pop: [{
            twentytwoestimate: 333287557,
            twentyCensus: 331449281,
            density: "87/sq mi"
          }],
          gdp: [{
            year: 2023,
            total: "$26.949 trillion",
            perCapita: "$80412"
          }],
          legislature: [{
            congress: 'Congress',
            upperhouse: 'Senate',
            lowerhouse: 'House of Representatives'
          }],
          ethnicgroups: [
            {
              white: 61.6,
              black: 12.4,
              asian: 6,
              nativeamerican: 1.1,
              pacificislander: 0.2,
              twoormoreraces: 10.2,
              other: 8.4
            }
          ],
          region: [
            {
              state: [
                { a: 'a'}
              ]
            }
          ]
        }]
    },
  ])

  return (
    <>
    {array.map((e, i) => {
      return (
        <div key={i}>
          {e.nation}
          {e.data.map((e,i) => {
            return (
              <div key={i}>
                {e.population}
                {e.percentageofworld}
                {e.date}
                {e.source}
                {e.ethnicgroups.map((e,i) => {
                  return (
                    <div key={i}> 
                    {e.white}
                    {e.black},
                    {e.asian},
                    {e.nativeamerican},
                    {e.pacificislander},
                    {e.twoormoreraces}
                    </div>
                  )
                })}
                {e.region.map((e,i) => {
                  return (
                    <div key={i}>
                      {e.state.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.a}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      );
    })}
  </>
  );
}