import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Tables({_matches, number}) {
  const [mounted, setMounted] = useState(false);
  const [useData, setData] = useState(false);
  useEffect(() => {
    setMounted(true);
    const data = [];
    for (let i = 0; i < _matches.length/number; i++) {
      data.push(_matches.slice(i*number, (i+1)*(number)));
    }
    console.log(data);
    setData(data);
  }, []);

  function styleTd() {
    return {whiteSpace: 'nowrap'};
  }
  function imageStyle(url) {
    return {margin: 0, padding: 0, backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'};
  }
  function ImageSize() {
    return (
      <div style={{margin: 0, padding: 0, width: 50, height: 50}}></div>
    );
  }

  function AccordionTable({data, index}) {
    return (
      <Accordion.Item id={`accordion${index}`} eventKey={index} >
        <Accordion.Header onClick={()=>{
          window.scrollTo(0, 0);
        }}>Top {number*(index+1)}</Accordion.Header>
        <Accordion.Body style={{margin: 0, padding: 1}} >
          <Table bordered striped={true} responsive={true}
            style={document.documentElement.clientWidth < 580 ?
          {textAlign: 'center', fontSize: '0.85rem', verticalAlign: 'center', maxWidth: 1200, margin: 'auto'} :
          {textAlign: 'center', maxWidth: 1200, margin: 'auto'}}>
            <thead>
              <tr>
                <th style={{width: 70}}>Pos  </th>
                <th colSpan="2">Nick</th>
                <th>Rate</th>
                <th>WinRate</th>
                <th>kills</th>
                <th>deaths</th>
                <th>Assis</th>
                <th>Lasts</th>
                <th>Denies</th>
                <th>GPM</th>
                <th>XPM</th>
                <th>Hero</th>
                <th>Tower</th>
                <th>Heal</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player, i) => (
                <tr key={player.profile.account_id}>
                  <td style={styleTd(player.win)}>
                    {(i+1)+number*index}
                  </td>
                  <td style={imageStyle(player.profile.avatarfull)}>
                    <ImageSize />
                  </td>
                  <td style={styleTd(player.win)}>
                    <a href={`/matches/${player.profile.account_id}`}>
                      {player.profile.personaname.slice(0, 15)}
                    </a></td>
                  <td style={styleTd(player.win)}>
                    {player.rankingRate} </td>
                  <td style={styleTd(player.win)}>
                    {player.winRate.toFixed(1)}% </td>
                  <td style={styleTd(player.win)}>
                    {player.kills.toFixed(1)} </td>
                  <td style={styleTd(player.win)}>
                    {player.deaths.toFixed(1)} </td>
                  <td style={styleTd(player.win)}>
                    {player.assists.toFixed(1)} </td>
                  <td style={styleTd(player.win)}>
                    {player.last_hits.toFixed(1)}</td>
                  <td style={styleTd(player.win)}>
                    {player.denies.toFixed(1)}</td>
                  <td style={styleTd(player.win)}>
                    {player.gold_per_min.toFixed(0)} </td>
                  <td style={styleTd(player.win)}>
                    {player.xp_per_min.toFixed(0)}</td>
                  <td style={styleTd(player.win)}>
                    {player.hero_damage.toFixed(0)} </td>
                  <td style={styleTd(player.win)}>
                    {player.tower_damage.toFixed(0)} </td>
                  <td style={styleTd(player.win)}>
                    {player.hero_healing.toFixed(0)} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    );
  }

  return (
    mounted && <Accordion defaultActiveKey={0}>
      {useData && useData.map((matches, index)=> (
        <AccordionTable key={index} data={matches} index={index}/>
      ))}
    </Accordion >
  );
}

export default Tables;
