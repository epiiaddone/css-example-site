import styled from "styled-components";

const ResponsiveList = () => {
    return (
        <Wrapper>
            <div class="section">
                <h3 class="title">Method 1: Flex - maintain child size</h3>
                <div class="parent cluster">
                    <div>Bulbasaur</div>
                    <div>Digglett</div>
                    <div>Onix</div>
                    <div>Zubat</div>
                    <div>wigglytuff</div>
                    <div>Cubone</div>
                    <div>kakuna</div>
                    <div>Metapod</div>
                    <div>Charmander</div>
                    <div>Mew</div>
                    <div>Metwo</div>
                    <div>Zapdos</div>
                    <div>Articuno</div>
                    <div>Pidgey</div>
                    <div>Marowak</div>
                </div>
            </div>

            <div class="section">
                <h3 class="title">Method 2: Auto Grid</h3>
                <div class="parent auto-grid">
                    <div>Bulbasaur</div>
                    <div>Digglett</div>
                    <div>Onix</div>
                    <div>Zubat</div>
                    <div>wigglytuff</div>
                    <div>Cubone</div>
                    <div>kakuna</div>
                    <div>Metapod</div>
                    <div>Charmander</div>
                    <div>Mew</div>
                    <div>Metwo</div>
                    <div>Zapdos</div>
                    <div>Articuno</div>
                    <div>Pidgey</div>
                    <div>Marowak</div>
                </div>
            </div>


            <div class="section">
                <h3 class="title">Method 3: Flexbox with grow - looks wierd at certain break points</h3>
                <div class="parent flexible-grid">
                    <div>Bulbasaur</div>
                    <div>Digglett</div>
                    <div>Onix</div>
                    <div>Zubat</div>
                    <div>wigglytuff</div>
                    <div>Cubone</div>
                    <div>kakuna</div>
                    <div>Metapod</div>
                    <div>Charmander</div>
                    <div>Mew</div>
                    <div>Metwo</div>
                    <div>Zapdos</div>
                    <div>Articuno</div>
                    <div>Pidgey</div>
                    <div>Marowak</div>
                </div>
            </div>


            <div class="section">
                <h3 class="title">Method 4a: Reel - Exact Fit</h3>
                <div class="parent reel reel-exact-fit">
                    <div>Bulbasaur</div>
                    <div>Digglett</div>
                    <div>Onix</div>
                    <div>Zubat</div>
                    <div>wigglytuff</div>
                    <div>Cubone</div>
                    <div>kakuna</div>
                    <div>Metapod</div>
                    <div>Charmander</div>
                    <div>Mew</div>
                    <div>Metwo</div>
                    <div>Zapdos</div>
                    <div>Articuno</div>
                    <div>Pidgey</div>
                    <div>Marowak</div>
                </div>
            </div>

            <div class="section">
                <h3 class="title">Method 4b: Reel - Some of next element</h3>
                <div class="parent reel reel-some-next">
                    <div>Bulbasaur</div>
                    <div>Digglett</div>
                    <div>Onix</div>
                    <div>Zubat</div>
                    <div>wigglytuff</div>
                    <div>Cubone</div>
                    <div>kakuna</div>
                    <div>Metapod</div>
                    <div>Charmander</div>
                    <div>Mew</div>
                    <div>Metwo</div>
                    <div>Zapdos</div>
                    <div>Articuno</div>
                    <div>Pidgey</div>
                    <div>Marowak</div>
                </div>
            </div>


            <div class="section">
                <h3 class="title">Main with sidebar</h3>
                <div class="parent main-with-sidebar">
                    <div class="main-section">
                        <h2>Here is the title about something</h2>
                        <p>Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company, founded by Nintendo, Game Freak, and Creatures.
                        </p>
                        <p>The franchise was created by Satoshi Tajiri in 1996, and is centered around fictional creatures called "Pokémon".
                        </p>
                        <p> In Pokémon, Pokémon Trainers are people who catch, train, care for, and battle with Pokémon.
                        </p>
                        <p>The English slogan for the franchise is "Gotta Catch ‘Em All!". There are currently 1008 Pokémon species.
                        </p>
                        <p>The franchise began as Pocket Monsters: Red and Green (later released outside of Japan as Pokémon Red and Blue), a pair of video games for the original Game Boy handheld system that were developed by Game Freak and published by Nintendo in February 1996.
                        </p>
                        <p>Pokémon soon became a media mix franchise adapted into various different media.[8]
                        </p>
                        <p>Pokémon is one of the highest-grossing media franchise of all time.
                        </p>
                        <p>The Pokémon video game series is the third best-selling video game franchise of all time with more than 440 million copies sold and one billion mobile downloads
                        </p>
                        <p>The Pokémon video game series spawned an anime television series that has become the most successful video game adaptation of all time
                        </p>
                        <p>The Pokémon Trading Card Game is the highest-selling trading card game of all time with over 43.2 billion cards sold.
                        </p>

                    </div>
                    <div class="secondary-section">
                        <p>The Pokémon franchise began as Pocket Monsters: Red and Green.
                        </p>
                        <p>.Pokémon Adventures manga first released in Japan in March 1997.
                        </p>
                        <p>. Pocket Pikachu was released in Japan in March 1998.
                        </p>
                        <p>In 1998, Nintendo spent $25 million.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.main`
/*setup styles - just to help visualize the solutions */
background-color:black;
color:white;



.parent{
outline: 5px solid hotpink;
padding: 1rem;
}

.section{
margin:2rem;
}

.parent > div{
background-color:darkblue;
border:1px solid white;
padding:0.5rem;
}



/* method 1: maintains different sizes of the children */
.cluster{
display:flex;
flex-wrap:wrap;
gap:1rem;
}

/*  method 2: children are all the same size */
.auto-grid{
--min-column-size:10rem;
display:grid;
gap:1rem;
grid-template-columns: repeat(auto-fit, minmax(min(var(--min-column-size),100%),1fr));
}

/* method 3: maintains different sizes but also fills space */
.flexible-grid{
display:flex;
flex-wrap:wrap;
gap:1rem;
}

.flexible-grid > *{
flex:1;
}

/* method:4a horizontal scroll window */
.reel{
--gap:1rem;
display:grid;
gap:var(--gap);
grid-auto-flow: column;
overflow-x:scroll;
scroll-padding:var(--gap);
scroll-snap-start: x mandatory; /* especially good for touch devices  not sure if this is working*/
}

.reel-exact-fit{
--gap:1rem;
/*shows 2 children exactely*/
grid-auto-columns: calc(50% - (var(--gap)/2));
}

.reel-some-next{
/* method 4b: shows 4 children plus a little bit of the next child */
grid-auto-columns:20% ;
}

.reel > * {
scroll-snap-align: start;
}

/* method 5: main with sidebar */
.main-with-sidebar{
display:flex;
flex-wrap:wrap;
align-items:start;
gap:1rem;
}

.main-section{
flex-basis: 500px; /*this is roughly the breakpoint */
flex-grow:9999; /* so when the divs are side by side, only this div will grow */
}

.secondary-section{
flex-basis:300px;
flex-grow:1;
}
`;


export default ResponsiveList;