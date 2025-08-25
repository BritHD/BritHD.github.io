import Shaping from '/Shaping.mp4'
import Tycoon from '/tycoon.png'
import Monster from '/monster.png'
import MonsterHTML from '/monster.html?url'
import Network from '/network.png'
import NetworkPDF from '/networkPDF.pdf'
import DrawNetwork from '/drawNetwork.png'
import PlayPokemon from '/PlayPokemon.png'

import Skill from "../components/Skill"

function Projects() {

  return (
    <div id='projects'>
      <p className="font-bold text-8xl py-[100px] text-center">Projects</p>
      <div className="md:flex md:justify-center">
        <video className='md:w-1/3 m-5' controls>
          <source src={Shaping} type="video/mp4" alt='A game with shapes' />
        </video>
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Shape Unity Game</p>
          <p>A video of a small prototype unity game I made. It is a short platforming game about shapes.
            You can play a prototype version of it in the link below.</p>
          <br />
          <a className='font-bold text-blue-500' href="https://vdstudio.itch.io/shape">Shaping!</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="Unity" />
            <Skill skill="C#" />
            <Skill skill="Itch.io" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={Tycoon} alt="A game with cards" />
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Multiplayer Card Game</p>
          <p>A multiplayer card game I made in ReactJs that uses servers to play a card game with multiplayer!
            This card game based on the game Persona 5 Royal, and you can play it in the link below.</p>
          <br />
          <p>Note that render.com backend servers may take up to 50 seconds to get running if it has been dormant for a while.</p>
          <br />
          <a className='font-bold text-blue-500' href="https://tycoon2player.onrender.com/">Tycoon!</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="ReactJs" />
            <Skill skill="NodeJs" />
            <Skill skill="Express" />
            <Skill skill="SocketIO" />
            <Skill skill="Javascript" />
            <Skill skill="Render" />
            <Skill skill="API" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={Monster} alt="A game with rpg elements" />
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Short RPG with Twine</p>
          <p>A Twine project I made, it is based on how your choices can affect your game,
            as well as a simple rpg-inspired battle mechanic more akin to a puzzle. You can play it in the link below</p>
          <br />
          <a className='font-bold text-blue-500' href={MonsterHTML}>A World With Monsters</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="Html" />
            <Skill skill="Twine" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={Network} alt="A website with network graphs" />
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Networkx on HTML</p>
          <p>A simple website that you can use to make network graphs. This is made with React, and a backend of Django to use python&apos;s Networkx library. This website is deployed using AWS EC2 and S3.
            You can see the documentation and try it out for yourself below.</p>
          <br />
          <a className='font-bold text-blue-500' href={NetworkPDF}>Documentation PDF</a>
          <br />
          <a className='font-bold text-blue-500' href={'http://networkdemo.s3.us-east-2.amazonaws.com/dist/index.html'}>Network Graph Website</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="Html" />
            <Skill skill="Javascript" />
            <Skill skill="Django" />
            <Skill skill="ReactJs" />
            <Skill skill="AWS" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={DrawNetwork} alt="A website with drawn network graphs you can make" />
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Draw Networks on the Web</p>
          <p>A simple website that you can use to draw network graphs yourself. This is made with React, and this website is deployed using Github Pages.
            You can access the website with the link below.</p>
          <br />
          <a className='font-bold text-blue-500' href={'https://brithd.github.io/DrawNetwork/'}>Drawn Network Website</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="Html" />
            <Skill skill="Javascript" />
            <Skill skill="ReactJs" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={PlayPokemon} alt="A website that looks for play pokemon events based on zip code" />
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Play Pokemon Event Finder</p>
          <p>A simple website that shows you any local play pokemon events by zipcode and lists them by date! This uses Pokemon&apos;s backend api with a python flask backend and react frontend, deployed using Vercel.</p>
          <br />
          <p>Due to Vercel&apos;s hobby tier, the backend server may fail due to excessive use. This website may also be taken down when Pokemon&apos;s own event finder lists the events by store and searched by zip code themselves.</p>
          <br />
          <a className='font-bold text-blue-500' href={'https://play-pokemon-event-finder.vercel.app'}>Play Pokemon Event Finder Website</a>
          <br />
          <br />
          <div className="flex flex-wrap">
            <Skill skill="Html" />
            <Skill skill="Javascript" />
            <Skill skill="ReactJs" />
            <Skill skill="Flask" />
            <Skill skill="Vercel" />
            <Skill skill="API" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects