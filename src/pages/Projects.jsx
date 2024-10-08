import Shaping from '/Shaping.mp4'
import Tycoon from '/tycoon.png'
import Monster from '/monster.png'
import MonsterHTML from '/monster.html?url'
import Network from '/network.png'
import NetworkPDF from '/networkPDF.pdf'

function Projects() {

  return (
    <div id = 'projects'>
      <p className="font-bold text-8xl py-[100px] text-center">Projects</p>
      <div className="md:flex md:justify-center">
        <video className='md:w-1/3 m-5'controls>
          <source src={Shaping} type="video/mp4" alt='A game with shapes'/>
        </video>
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Shape Unity Game</p>
          <p>A video of a small prototype unity game I made. It is a short platforming game about shapes. 
            You can play a prototype version of it in the link below.</p>
          <br/>
          <a className='font-bold text-blue-500' href="https://vdstudio.itch.io/shape">Shaping!</a>
          <br/>
          <br/>
          <div className="flex flex-wrap">
            <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">Unity</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">C#</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Itch.io</div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={Tycoon} alt="A game with cards"/>
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Multiplayer Card Game</p>
          <p>A multiplayer card game I made in ReactJs that uses servers to play a card game with multiplayer!
             This card game based on the game Persona 5 Royal, and you can play it in the link below.</p>
          <br/>
          <p>Note that render.com backend servers may take up to 50 seconds to get running if it has been dormant for a while.</p>
          <br/>
          <a className='font-bold text-blue-500' href="https://tycoon2player.onrender.com/">Tycoon!</a>
          <br/>
          <br/>
          <div className="flex flex-wrap">
            <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">ReactJs</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">NodeJs</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Express</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">SocketIO</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Javascript</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Render</div>
          </div>
        </div>
      </div>
      <div className="md:justify-center md:flex">
        <img className='size-full md:w-1/3 m-5' src={Monster} alt="A game with rpg elements"/>
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Short RPG with Twine</p>
          <p>A Twine project I made, it is based on how your choices can affect your game, 
            as well as a simple rpg-inspired battle mechanic more akin to a puzzle. You can play it in the link below</p>
          <br/>
          <a className='font-bold text-blue-500' href={MonsterHTML}>A World With Monsters</a>
          <br/>
          <br/>
          <div className="flex flex-wrap">
            <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">Html</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Twine</div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <img className='size-full md:w-1/3 m-5' src={Network} alt="A website with network graphs"/>
        <div className='md:w-1/3 m-5'>
          <p className="font-bold text-4xl my-[20px] text-center" >Networkx on HTML</p>
          <p>A simple website that you can use to make network graphs. This is made with React, and a backend of Django to use python's Networkx library. This website is deployed using AWS EC2 and S3.
            You can see the documentation and try it out for yourself below.</p>
          <br/>
          <a className='font-bold text-blue-500' href={NetworkPDF}>Documentation PDF</a>
          <br/>
          <a className='font-bold text-blue-500' href={'http://networkdemo.s3.us-east-2.amazonaws.com/dist/index.html'}>Network Graph Website</a>
          <br/>
          <br/>
          <div className="flex flex-wrap">
            <div className="bg-gray-300 w-max rounded-xl m-1 ml-0 px-2 py-1">Html</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Javascript</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">Django</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">ReactJs</div>
            <div className="bg-gray-300 w-max rounded-xl m-1 px-2 py-1">AWS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects