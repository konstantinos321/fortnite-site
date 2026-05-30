"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const tournaments = [
    {
      title: "Solo Cash Cup",
      status: "LIVE",
      region: "EU",
      time: "19:00",
      color: "purple",
      button: "WATCH NOW",
    },

    {
      title: "Duo Victory Cup",
      status: "SOON",
      region: "EU",
      time: "21:00",
      color: "blue",
      button: "DETAILS",
    },

    {
      title: "Ranked Cup",
      status: "OPEN",
      region: "NAC",
      time: "23:00",
      color: "green",
      button: "REGISTER",
    },

    {
      title: "Zero Build Cup",
      status: "LIVE",
      region: "NAE",
      time: "20:00",
      color: "purple",
      button: "WATCH NOW",
    },
  ];

  const news = [
    {
      title: "FNCS Global Championship Announced",
      description: "Epic Games revealed the new FNCS format and prize pool.",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop",
    },

    {
      title: "Zero Build Cups Return",
      description: "Competitive Zero Build tournaments are back this season.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    },

    {
      title: "New Ranked Rewards",
      description: "Players can unlock exclusive cosmetics through ranked cups.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const leaderboard = [
    {
      player: "Mongraal",
      points: 542,
      kills: 87,
      earnings: "$12,000",
    },

    {
      player: "Bugha",
      points: 518,
      kills: 81,
      earnings: "$10,500",
    },

    {
      player: "Clix",
      points: 497,
      kills: 75,
      earnings: "$9,300",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [timeLeft, setTimeLeft] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 2;

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const filteredTournaments = tournaments.filter((tournament) => {

    const matchesSearch = tournament.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      selectedRegion === "ALL" ||
      tournament.region === selectedRegion;

    return matchesSearch && matchesRegion;

  });

  return (
    <main
      className={`min-h-screen transition duration-500
        
      ${
        darkMode
          ? "bg-gradient-to-b from-black via-zinc-900 to-black text-white"
          : "bg-gray-100 text-black"
      }
      
      `}
    >

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800 backdrop-blur-lg sticky top-0 bg-black/70 z-50">

        <h1 className="text-3xl font-bold text-purple-500">
          FN Tournaments
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300 font-semibold">

          <button className="hover:text-purple-400 transition">
            Home
          </button>

          <button className="hover:text-purple-400 transition">
            Tournaments
          </button>

          <button className="hover:text-purple-400 transition">
            Leaderboard
          </button>

        </div>

        <div className="flex gap-4 items-center">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-xl font-bold transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 text-xl">

          <button className="hover:text-purple-400">
            Home
          </button>

          <button className="hover:text-purple-400">
            Tournaments
          </button>

          <button className="hover:text-purple-400">
            Leaderboard
          </button>

        </div>
      )}

      {/* HERO */}
      <section
        className="text-center py-32 px-6 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">

          <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mb-6 drop-shadow-[0_0_25px_#a855f7]">
            Fortnite Competitive
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl mb-8">
            Daily Cups • Live Events • Real-Time Tournaments
          </p>

          <div className="bg-purple-700 inline-block px-8 py-4 rounded-2xl text-2xl md:text-3xl font-bold shadow-2xl animate-pulse">
            🔥 NEXT CASH CUP STARTS IN: {timeLeft}
          </div>

        </div>

      </section>

      {/* DISCORD SECTION */}
      <section className="px-6 md:px-10 mt-16">

        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-3xl p-10 text-center shadow-2xl">

          <h2 className="text-5xl font-bold mb-6">
            Join Our Discord
          </h2>

          <p className="text-xl text-gray-200 mb-8">
            Find teammates, tournament updates, scrims and live Fortnite discussions.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition shadow-xl">
            JOIN DISCORD
          </button>

        </div>

      </section>

      {/* FEATURED TOURNAMENT */}
      <section className="px-6 md:px-10 mt-14">

        <div
          className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center p-10 bg-cover bg-center border border-purple-500 shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')",
          }}
        >

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-2xl">

            <div className="bg-red-600 inline-block px-4 py-2 rounded-full font-bold animate-pulse mb-6">
              🔴 LIVE EVENT
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              FNCS Global Championship
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Watch the best Fortnite players battle for glory and massive prize pools.
            </p>

            <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 transition">
              WATCH LIVE
            </button>

          </div>

        </div>

      </section>

      {/* NEWS SECTION */}
      <section className="px-6 md:px-10 mt-16">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">
            Latest Fortnite News
          </h2>

          <button className="text-purple-400 hover:text-purple-300 font-bold">
            View All
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition shadow-xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* LIVE STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 mt-10">

        <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
          <h3 className="text-5xl font-bold text-purple-400 mb-3">
            125K
          </h3>

          <p className="text-gray-400 text-xl">
            Active Players
          </p>
        </div>

        <div className="bg-zinc-900 border border-blue-500 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
          <h3 className="text-5xl font-bold text-blue-400 mb-3">
            24
          </h3>

          <p className="text-gray-400 text-xl">
            Live Tournaments
          </p>
        </div>

        <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
          <h3 className="text-5xl font-bold text-green-400 mb-3">
            $500K
          </h3>

          <p className="text-gray-400 text-xl">
            Prize Pools
          </p>
        </div>

      </section>

      {/* SEARCH */}
      <section className="px-6 md:px-10 mt-12 mb-6">

        <input
          type="text"
          placeholder="Search tournaments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4 text-white text-xl outline-none focus:border-purple-500"
        />

      </section>

      {/* REGION FILTERS */}
      <section className="px-6 md:px-10 mb-10 flex flex-wrap gap-4">

        {["ALL", "EU", "NAE", "NAC"].map((region) => (

          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-5 py-3 rounded-xl font-bold transition

            ${
              selectedRegion === region
                ? "bg-purple-600"
                : "bg-zinc-800 hover:bg-zinc-700"
            }
            
            `}
          >
            {region}
          </button>

        ))}

      </section>

      {/* TOURNAMENTS */}
      <section className="p-6 md:p-10">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Today's Tournaments
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {filteredTournaments.map((tournament, index) => (

            <div
              key={index}
              className={`bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-xl
              
              ${tournament.color === "purple" && "border-purple-500 hover:shadow-purple-500/40 hover:shadow-2xl"}
              ${tournament.color === "blue" && "border-blue-500 hover:shadow-blue-500/40 hover:shadow-2xl"}
              ${tournament.color === "green" && "border-green-500 hover:shadow-green-500/40 hover:shadow-2xl"}
              
              `}
            >

              <div className="flex justify-between items-center mb-4">

                <span
                  className={`
                    px-4 py-1 rounded-full text-sm font-bold animate-pulse

                    ${
                      tournament.status === "LIVE"
                        ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
                        : ""
                    }

                    ${
                      tournament.status === "SOON"
                        ? "bg-yellow-500 text-black"
                        : ""
                    }

                    ${
                      tournament.status === "OPEN"
                        ? "bg-green-600 text-white"
                        : ""
                    }
                  `}
                >
                  {tournament.status}
                </span>

                <span className="text-gray-400">
                  {tournament.region}
                </span>

              </div>

              <h3 className="text-3xl font-bold mb-3">
                {tournament.title}
              </h3>

              <p className="text-gray-400 mb-6">
                Starts: {tournament.time}
              </p>

              <button
                className={`w-full px-5 py-3 rounded-xl font-bold transition
                  
                  ${tournament.color === "purple" && "bg-purple-600 hover:bg-purple-500"}
                  ${tournament.color === "blue" && "bg-blue-600 hover:bg-blue-500"}
                  ${tournament.color === "green" && "bg-green-600 hover:bg-green-500"}
                  
                  `}
              >
                {tournament.button}
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* LEADERBOARD */}
      <section className="px-6 md:px-10 pb-20">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Top Players
        </h2>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">

          <div className="grid grid-cols-4 bg-zinc-800 p-5 font-bold text-lg">
            <div>Player</div>
            <div>Points</div>
            <div>Kills</div>
            <div>Earnings</div>
          </div>

          {leaderboard.map((player, index) => (

            <div
              key={index}
              className="grid grid-cols-4 p-5 border-t border-zinc-800 hover:bg-zinc-800/50 transition"
            >

              <div className="font-bold text-purple-400">
                #{index + 1} {player.player}
              </div>

              <div>{player.points}</div>

              <div>{player.kills}</div>

              <div>{player.earnings}</div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 p-8 text-center text-gray-500">
        FN Tournaments © 2026 • Competitive Fortnite Tracker
      </footer>

    </main>
  );
}