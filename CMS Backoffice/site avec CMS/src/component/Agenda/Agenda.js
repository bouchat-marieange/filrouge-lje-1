import React from 'react'

const Agenda = ()=> ({
  render: function() {
    return (
      <div>
        <h1>Agenda 2017 - 2018</h1>

        <iframe title = "iframeAgenda" src="https://calendar.google.com/calendar/embed?title=Les%20Jeunes%20Entreprises&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fr.be%23holiday%40group.v.calendar.google.com&amp;color=%238D6F47&amp;src=434udfoa6egkep7alkaf1rnj28%40group.calendar.google.com&amp;color=%232952A3&amp;src=0g8ttf3rof32nhg900ugadk8b4%40group.calendar.google.com&amp;color=%23875509&amp;src=tl9g34mtgk0cee2l4l88n350ss%40group.calendar.google.com&amp;color=%23B1440E&amp;src=d0i6qmcrqecr5aj3sv78q4tlr0%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=Europe%2FBrussels" style={{borderWidth:0}} width="800" height="600" frameborder="0" scrolling="no">
        </iframe>

    </div>
  );
  }
});


export default Agenda;
