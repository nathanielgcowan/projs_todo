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
                {e.ethnicgroups.map((e,i) => {
                  return (
                    <div key={i}> 
                    {e.white}
                    {e.black},
                    {e.asian},
                    {e.nativeamerican},
                    {e.pacificislander},
                    {e.twoormoreraces},
                    {e.other}
                    </div>
                  )
                })}
                {e.ethnicgroups.map((e,i) => {
                  return (
                    <div key={i}> 
                    {e.white}
                    {e.black},
                    {e.asian},
                    {e.nativeamerican},
                    {e.pacificislander},
                    {e.twoormoreraces},
                    {e.other}
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
              </div>
            )
          })}
        </div>
      );
    })}
  </>
  );
}