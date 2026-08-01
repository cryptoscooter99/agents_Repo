"use client";

import { useState } from "react";

const songs = [
  {
    title: "A Thousand Miles",
    duration: "03:30",
    video: "nsSf_lCldc8",
  },
  { title: "Hurts So Good", duration: "02:08", video: "9EwN_jSoIA8" },
  { title: "Zombie", duration: "02:45", video: "EsSkuIjSbuQ" },
];

const friends = [
  ["Abbey", "Vocals", "photo1.jpg"],
  ["Cece", "Vocals", "photo2.jpg"],
  ["Eric B", "Guitar", "photo3.jpg"],
  ["Eric B", "Keys", "photo4.jpg"],
  ["Scott", "Drums", "photo5.jpg"],
  ["Cujo", "Bass", "photo6.jpg"],
];

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-title">
        <span>{title}</span>
        <span aria-hidden="true">★</span>
      </div>
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default function Home() {
  const [activeSong, setActiveSong] = useState(0);
  const [playing, setPlaying] = useState(false);

  const selectSong = (index: number) => {
    if (activeSong === index) setPlaying((value) => !value);
    else {
      setActiveSong(index);
      setPlaying(true);
    }
  };

  return (
    <main>
      <header className="network-bar">
        <a className="network-mark" href="#profile" aria-label="MySpace home">
          <span className="people-mark" aria-hidden="true">♟♟♟</span>
          <span className="brand-stack">
            <b>MySpace</b>
            <small>a place for friends</small>
          </span>
        </a>
        <div className="utility-links">
          <a href="https://www.karmadoll.band/" target="_blank" rel="noreferrer">Help</a>
          <i />
          <a href="#profile">SignOut</a>
        </div>
        <nav aria-label="MySpace navigation">
          <a href="#profile">Home</a><i />
          <a href="#friends">Browse</a><i />
          <a href="#profile">Search</a><i />
          <a href="#friends">Invite</a><i />
          <a href="#songs">Film</a><i />
          <a href="#comments">Mail</a><i />
          <a href="#comments">Blog</a><i />
          <a href="#friends">Favorites</a><i />
          <a href="#comments">Forum</a><i />
          <a href="#friends">Groups</a><i />
          <a href="#shows">Events</a><i />
          <a href="#songs">Videos</a><i />
          <a href="#songs">Music</a>
        </nav>
        <p>New Orleans, LA <span>● Online Now!</span></p>
      </header>

      <div className="ticker" aria-hidden="true">
        <span>★ KARMADOLL IS IN YOUR EXTENDED NETWORK ★</span>
        <span>NEW ORLEANS ROCK · VOODOO SOUL · RAW ENERGY</span>
      </div>

      <div className="page-shell" id="profile">
        <div className="wall-doll" aria-hidden="true">
          <img src="https://www.karmadoll.band/assets/doll-cutout-DgicgRcV.png" alt="" />
        </div>

        <aside className="left-column">
          <section className="identity-card">
            <div className="paper-logo">
              <img
                src="https://www.karmadoll.band/assets/karmadoll-logotype-DEPozQF6.png"
                alt="KarmaDoll"
              />
              <p>NEW ORLEANS ROCK · VOODOO SOUL</p>
            </div>

            <div className="profile-photo-wrap">
              <span className="tape tape-a" />
              <span className="tape tape-b" />
              <div className="profile-photo">
                <img
                  src="https://www.karmadoll.band/assets/doll-cutout-DgicgRcV.png"
                  alt="Karmie, the KarmaDoll voodoo doll"
                />
              </div>
            </div>

            <div className="status-line"><span /> Online Now!</div>
            <p className="tagline">Pop · Grunge · Dance · Raw Energy</p>
          </section>

          <Panel title="Contacting KarmaDoll" className="contact-panel">
            <div className="contact-grid">
              <a href="mailto:abbey@karmadoll.band">✉ Send Message</a>
              <a href="#comments">✚ Add Comment</a>
              <a href="https://www.instagram.com/karmadollband/" target="_blank" rel="noreferrer">★ Follow the Band</a>
              <a href="https://www.karmadoll.band/" target="_blank" rel="noreferrer">♥ Official Site</a>
            </div>
          </Panel>

          <Panel title="KarmaDoll's Blurbs">
            <div className="about-copy">
              <h3>About me:</h3>
              <p>
                Six musicians, stitched together on Bourbon Street. Dual vocal
                powerhouses, a tight rhythm section, and enough Warped Tour
                spirit to wake the dead.
              </p>
              <p className="scribble">you don&apos;t have to sing good—just loud. ♡</p>
              <h3>Who I&apos;d like to meet:</h3>
              <p>Night people, dance-floor screamers, and your ex in the crowd.</p>
            </div>
          </Panel>

          <Panel title="General Interests" className="notebook-panel">
            <ul className="interest-list">
              <li>Live music after midnight</li>
              <li>Voodoo soul &amp; pop-punk hooks</li>
              <li>Bourbon Street chaos</li>
              <li>Glitter, horror &amp; loud guitars</li>
              <li>Making strangers sing together</li>
            </ul>
          </Panel>
        </aside>

        <div className="right-column">
          <Panel title="KarmaDoll's Top Songs" className="songs-panel">
            <div className="player-status">
              <div className={`equalizer ${playing ? "is-playing" : ""}`} aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => <i key={index} />)}
              </div>
              <div>
                <small>NOW {playing ? "PLAYING" : "PAUSED"}</small>
                <strong>{songs[activeSong].title}</strong>
              </div>
              <button
                className="big-play"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? "Pause selected song" : "Play selected song"}
              >
                {playing ? "Ⅱ" : "▶"}
              </button>
            </div>

            <ol className="song-list" id="songs">
              {songs.map((song, index) => (
                <li className={activeSong === index ? "active" : ""} key={song.title}>
                  <button onClick={() => selectSong(index)} aria-label={`Play ${song.title}`}>
                    <span className="track-number">0{index + 1}</span>
                    <span className="mini-play">{activeSong === index && playing ? "Ⅱ" : "▶"}</span>
                    <strong>{song.title}</strong>
                    <span className="waveform" aria-hidden="true" />
                    <time>{song.duration}</time>
                  </button>
                  <a href={`https://www.youtube.com/watch?v=${song.video}`} target="_blank" rel="noreferrer">
                    WATCH ↗
                  </a>
                </li>
              ))}
            </ol>

            <div className="player-footer">
              <button aria-label="Previous song" onClick={() => setActiveSong((activeSong + songs.length - 1) % songs.length)}>◀|</button>
              <button aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((value) => !value)}>{playing ? "Ⅱ" : "▶"}</button>
              <button aria-label="Next song" onClick={() => setActiveSong((activeSong + 1) % songs.length)}>|▶</button>
              <span className="progress"><i style={{ width: playing ? "62%" : "24%" }} /></span>
              <span>🔊</span>
            </div>
          </Panel>

          <Panel title="KarmaDoll's Friend Space" className="friends-panel" id="friends">
            <div className="friends-intro">
              KarmaDoll has <b>6</b> ride-or-dies.
              <span>View All Friends</span>
            </div>
            <div className="friend-grid">
              {friends.map(([name, role, image], index) => (
                <article className={`friend friend-${index + 1}`} key={`${name}-${role}`}>
                  <div className="polaroid">
                    <img src={`https://www.karmadoll.band/photos/${image}`} alt={`${name}, ${role} in KarmaDoll`} />
                  </div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </article>
              ))}
            </div>
          </Panel>

          <div className="lower-grid">
            <Panel title="Upcoming Shows" className="shows-panel" id="shows">
              <div className="residency-stamp">EVERY<br />WEEKEND</div>
              <div className="show-copy">
                <strong>FRIDAY · SATURDAY · SUNDAY</strong>
                <h3>The Bandstand on Bourbon</h3>
                <p>New Orleans, LA · 7:30 PM–12:30 AM</p>
                <a href="https://www.karmadoll.band/" target="_blank" rel="noreferrer">GET DETAILS ↗</a>
              </div>
            </Panel>

            <Panel title="Profile Details" className="details-panel">
              <dl>
                <div><dt>Status:</dt><dd>Still beating</dd></div>
                <div><dt>Hometown:</dt><dd>New Orleans, LA</dd></div>
                <div><dt>Body type:</dt><dd>Stitched together</dd></div>
                <div><dt>Occupation:</dt><dd>Raising the dead</dd></div>
              </dl>
            </Panel>
          </div>

          <Panel title="KarmaDoll's Friends Comments" className="comments-panel" id="comments">
            <p className="comment-count">Displaying <b>3</b> of <b>666</b> comments · <a href="mailto:cece@karmadoll.band">Add Comment</a></p>
            <div className="comment">
              <div className="comment-avatar">🖤</div>
              <div><strong>bourbonstreetbaby</strong><time>7/26/26 · 11:42 PM</time><p>That last set was UNREAL. My voice is gone and I regret nothing!!!</p></div>
            </div>
            <div className="comment">
              <div className="comment-avatar doll-avatar">☠</div>
              <div><strong>voodoo_vixen</strong><time>7/19/26 · 2:13 AM</time><p>Top 8 forever. Karmie owns my soul. &lt;3</p></div>
            </div>
            <div className="comment">
              <div className="comment-avatar">★</div>
              <div><strong>tourist_trap</strong><time>7/12/26 · 9:08 PM</time><p>Came for Bourbon Street, stayed for KarmaDoll.</p></div>
            </div>
          </Panel>
        </div>
      </div>

      <footer>
        <p>© KarmaDoll · New Orleans Rock · Fan-profile concept</p>
        <a href="https://www.karmadoll.band/" target="_blank" rel="noreferrer">Back to karmadoll.band ↗</a>
      </footer>
    </main>
  );
}
