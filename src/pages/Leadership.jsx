export default function Leadership() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--leadership" id="heroLeadership">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Our Leadership</h1>
          <p className="hero__subtitle">Meet the dedicated leaders guiding our community with wisdom, devotion, and an
            unwavering passion for Christ.</p>
        </div>
      </section>

      {/* ===== LEADERSHIP GRID ===== */}
      <section className="leadership-page" id="leadershipGrid">
        <div className="container">
          <div className="leadership-page__header">
            <h2 className="leadership-page__title">Our LCC Executives</h2>
            <p className="leadership-page__subtitle">Servant leaders committed to building a Christ-centered community on
              campus.</p>
          </div>
          <div className="leadership-page__grid">
            {/* President */}
            <div className="leader-card-lg">
              <img src="/images/Executives/President.JPG" alt="Elder Jude Boadi" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Elder Jude Boadi </h4>
              <p className="leader-card-lg__role">President</p>
              <p className="leader-card-lg__bio">Leading with vision and faith, Elder Jude oversees the overall direction of PENSA-UMaT, ensuring alignment with our mission of raising Christ-like leaders.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Vice_president.JPG" alt="Deaconess Eunice Bediako Ahenkorah" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Deaconess Eunice Bediako Ahenkorah</h4>
              <p className="leader-card-lg__role">Vice President</p>
              <p className="leader-card-lg__bio">Deaconess Eunice assists the President in steering the fellowship's vision, driving key initiatives, and ensuring the spiritual well-being and active engagement of all members.</p>
            </div>
            
            <div className="leader-card-lg">
              <img src="/images/Executives/General_Secretary.JPG" alt="Elder Joseph" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Elder Joseph</h4>
              <p className="leader-card-lg__role">General Secretary</p>
              <p className="leader-card-lg__bio">Elder Joseph manages the administrative and communication affairs of PENSA-UMaT, ensuring that records, correspondence, and operational processes run smoothly and efficiently.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Financial_Secretary.JPG" alt="Allara" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Allara</h4>
              <p className="leader-card-lg__role">Financial Secretary</p>
              <p className="leader-card-lg__bio">Allara handles the financial documentation and records for the fellowship, working closely with the Treasurer to ensure transparency, budgeting, and proper allocation of resources.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Treasurer.JPG" alt="Priscilla" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Priscilla </h4>
              <p className="leader-card-lg__role">Treasurer</p>
              <p className="leader-card-lg__bio">Priscilla manages the fellowship's funds with integrity, ensuring safe custody of finances and overseeing all deposits and expenditures to support PENSA-UMaT's mission.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Hall_Representative.JPG" alt="Deacon Joshua" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Deacon Joshua</h4>
              <p className="leader-card-lg__role">Hall Representative</p>
              <p className="leader-card-lg__bio">Deacon Joshua serves as a direct link between the fellowship and members residing in the halls, ensuring their needs are met and their active participation is encouraged.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/PDP_cordinator.JPG" alt="Deacon Akwasi Owusu Amoako" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Deacon Akwasi Owusu Amoako</h4>
              <p className="leader-card-lg__role">PDP Coordinator</p>
              <p className="leader-card-lg__bio">Akwasi coordinates the Personal Development Plan (PDP) programs, focusing on equipping members with essential skills, mentorship, and career guidance for holistic growth.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Okata.jpg" alt="Samuel Okata" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Samuel Okata</h4>
              <p className="leader-card-lg__role">Gents Wing Coordinator</p>
              <p className="leader-card-lg__bio">Samuel spearheads initiatives for the Gents Wing, organizing programs that foster brotherhood, spiritual maturity, and leadership development among the male members.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Ladies_Wing.JPG" alt="Priscilla" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Priscilla</h4>
              <p className="leader-card-lg__role">Ladies Wing Coordinator</p>
              <p className="leader-card-lg__bio">Priscilla champions the Ladies Wing, creating safe spaces for spiritual growth, mentorship, and empowerment for all female members of the fellowship.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Media_Head.JPG" alt="Ephriam" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Ephriam</h4>
              <p className="leader-card-lg__role">Media Head</p>
              <p className="leader-card-lg__bio">Ephriam leads the media team, managing the fellowship's digital presence, audiovisuals, and social media outreach to effectively share the Gospel and keep members connected.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Alumini_cordinator.JPG" alt="Ameyaw Ayepah" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Ameyaw Ayepah</h4>
              <p className="leader-card-lg__role">Alumni Coordinator</p>
              <p className="leader-card-lg__bio">Ameyaw bridges the gap between current students and alumni, fostering strong networks, mentorship opportunities, and continued support for the fellowship from past members.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Evangelism.JPG" alt="Benjamin Mankrado" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Benjamin Mankrado</h4>
              <p className="leader-card-lg__role">Evangelism Coordinator</p>
              <p className="leader-card-lg__bio">Benjamin drives the core mission of outreach, organizing evangelistic campaigns, street witnessing, and discipleship programs to bring souls to Christ on and off campus.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Deacon.jpg" alt="Deacon Gerson" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Deacon Gerson</h4>
              <p className="leader-card-lg__role">Prayer Coordinator</p>
              <p className="leader-card-lg__bio">Deacon Gerson leads the prayer force, organizing prayer meetings, intercessory sessions, and retreats to sustain the spiritual fervor and revival within the fellowship.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Oraganizer.jpg" alt="Franklin" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Franklin</h4>
              <p className="leader-card-lg__role">Organizer</p>
              <p className="leader-card-lg__bio">Franklin coordinates the logistics and physical arrangements for all PENSA-UMaT programs and events, ensuring they are executed seamlessly and with excellence.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Protocols_Duties.JPG" alt="Tryphena" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Tryphena</h4>
              <p className="leader-card-lg__role">Protocol and Duties Coordinator</p>
              <p className="leader-card-lg__bio">Tryphena oversees ushering, hospitality, and order during services, ensuring that all members and guests feel welcome and that events run in a highly organized manner.</p>
            </div>

            <div className="leader-card-lg">
              <img src="/images/Executives/Academic_board.JPG" alt="Makafui" className="leader-card-lg__photo" />
              <h4 className="leader-card-lg__name">Makafui</h4>
              <p className="leader-card-lg__role">Academic Board Head </p>
              <p className="leader-card-lg__bio">Makafui leads the Academic Board, organizing tutorials, study groups, and academic seminars to ensure members excel in their respective fields of study.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
