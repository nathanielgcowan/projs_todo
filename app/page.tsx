'use client'
import React, { useState } from "react";
import Datas from '../components/Arrays';

export default function App() {
  const [array, setArray] = useState(Datas)
  console.log(Datas)
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
                {e.fullname}
                {e.motto}
                {e.anthem}
                {e.capital}
                {e.largestcity}
                {e.officiallanguages}
                {e.nationallanguage}
                {e.flag}
                {e.demonym}
                {e.government}
                {e.president}
                {e.vicepresident}
                {e.housespeaker}
                {e.chiefjustice}
                {e.gini}
                {e.hdi}
                {e.currency}
                {e.dateformat}
                {e.drivingside}
                {e.callingcode}
                {e.iso3166code}
                {e.internettld}
                {e.origin.map((e,i) => {
                  return (
                    <div key={i}> 
                      {e.nonHispanicOrLatino},
                      {e.hispanicOrLatino}
                    </div>
                  )
                })}
                {e.ethnicgroups.map((e,i) => {
                  return (
                    <div key={i}> 
                      {e.white},
                      {e.black},
                      {e.asian},
                      {e.nativeamerican},
                      {e.pacificislander},
                      {e.twoormoreraces},
                      {e.other}
                    </div>
                  )
                })}
                {e.religion.map((e,i) => {
                  return (
                    <div key={i}> 
                      {e.christianity.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.protestantism}
                            {e.catholicism}
                            {e.other}
                          </div>
                        )
                      })},
                      {e.unaffiliated}
                      {e.buddhism}
                      {e.hinduism}
                      {e.islam}
                      {e.judaism}
                      {e.other}
                      {e.unanswered}
                    </div>
                  )
                })}
                {e.timezone.map((e,i) => {
                  return (
                    <div key={i}>
                      {e.timezone}
                      {e.summer}
                    </div>
                  )
                })}
                {e.region.map((e,i) => {
                  return (
                    <div key={i}>
                      {e.state.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.name}
                          </div>
                        )
                      })}
                      {e.district.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.name}
                          </div>
                        )
                      })}
                      {e.territory.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.name}
                          </div>
                        )
                      })}
                      {e.uninhabitedterritories.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.name}
                          </div>
                        )
                      })}
                      {e.county.map((e,i) => {
                        return (
                          <div key={i}>
                            {e.county}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
                {e.independencefromGreatBritain.map((e,i) => {
                  return (
                    <div key={i}>
                      {e.declaration}
                      {e.confederation}
                      {e.recognized}
                      {e.constitution}
                      {e.lastamendment}
                    </div>
                  )
                })}
                {e.area.map((e,i) => {
                  return (
                    <div key={i}>
                      {e.totalarea}
                      {e.water}
                      {e.landarea}
                    </div>
                  )
                })}
                {e.pop.map((e,i)=> {
                  return(
                    <div key={i}>
                      {e.twentytwoestimate}
                      {e.twentycensus}
                      {e.density}
                    </div>
                  )
                })}
                {e.gdp.map((e,i)=> {
                  return(
                    <div key={i}>
                      {e.year}
                      {e.total}
                      {e.percapita}
                    </div>
                  )
                })}
                {e.legislature.map((e,i)=> {
                  return(
                    <div key={i}>
                      {e.congress}
                      {e.upperhouse}
                      {e.lowerhouse}
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