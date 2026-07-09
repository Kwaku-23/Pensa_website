import { useState } from 'react';

export default function Give() {
  const [selectedType, setSelectedType] = useState('Offerings');
  const [selectedAmountStr, setSelectedAmountStr] = useState('50');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amt) => {
    setSelectedAmountStr(amt);
    if (amt !== 'custom') {
      setCustomAmount('');
    }
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmountStr('custom');
  };

  const handleProceed = () => {
    let finalAmount = selectedAmountStr === 'custom' ? parseFloat(customAmount) : parseFloat(selectedAmountStr);
    if (!finalAmount || finalAmount < 1) {
      alert("Please enter a valid amount.");
      return;
    }
    // Simulate Paystack popup
    alert(`Initiating Paystack for ${selectedType} - GHS ${finalAmount}`);
  };

  return (
    <>
      <style>{`
        /* ===== GIVE PAGE SPECIFIC STYLES ===== */
        .give-intro {
          padding: var(--space-4xl) 0;
          text-align: center;
        }

        .give-intro__verse {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.15rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto var(--space-sm);
          line-height: 1.7;
        }

        .give-intro__ref {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gold-500);
          margin-bottom: var(--space-2xl);
        }

        .give-intro__text {
          font-size: 0.95rem;
          color: var(--gray-500);
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .give-options {
          padding: 0 0 var(--space-4xl);
        }

        .give-options__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
          max-width: 1000px;
          margin: 0 auto;
        }

        .give-card {
          text-align: center;
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: var(--space-2xl) var(--space-xl);
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .give-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .give-card--featured {
          border: 2px solid var(--gold-500);
          background: linear-gradient(to bottom, rgba(212, 160, 23, 0.04), var(--white));
          position: relative;
        }

        .give-card--featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold-500);
          color: var(--navy-900);
          padding: 3px 14px;
          border-radius: var(--radius-xl);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .give-card__icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background: var(--gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin: 0 auto var(--space-lg);
        }

        .give-card--featured .give-card__icon {
          background: rgba(212, 160, 23, 0.15);
        }

        .give-card__title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: var(--space-sm);
        }

        .give-card__desc {
          font-size: 0.85rem;
          color: var(--gray-500);
          line-height: 1.7;
          margin-bottom: var(--space-xl);
        }

        /* Amount selector */
        .give-form {
          max-width: 600px;
          margin: 0 auto;
          padding: var(--space-3xl) 0;
        }

        .give-form__heading {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--space-sm);
        }

        .give-form__sub {
          text-align: center;
          font-size: 0.9rem;
          color: var(--gray-500);
          margin-bottom: var(--space-2xl);
        }

        .amount-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .amount-btn {
          padding: 0.8rem;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .amount-btn:hover,
        .amount-btn.active {
          border-color: var(--gold-500);
          background: rgba(212, 160, 23, 0.08);
          color: var(--gold-500);
        }

        .give-form__custom {
          margin-bottom: var(--space-xl);
        }

        .give-form__custom label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .give-form__custom-input {
          display: flex;
          align-items: center;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .give-form__custom-input:focus-within {
          border-color: var(--navy-700);
        }

        .give-form__custom-input span {
          padding: 0.7rem 1rem;
          background: var(--gray-50);
          font-weight: 600;
          color: var(--gray-500);
          border-right: 1px solid var(--gray-200);
        }

        .give-form__custom-input input {
          flex: 1;
          border: none;
          padding: 0.7rem 1rem;
          font-size: 1rem;
        }

        /* Payment methods */
        .payment-methods {
          padding: var(--space-xl) 0 var(--space-4xl);
          text-align: center;
        }

        .payment-methods__title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: var(--space-xl);
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
          max-width: 700px;
          margin: 0 auto var(--space-2xl);
        }

        .payment-card {
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          padding: var(--space-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .payment-card:hover,
        .payment-card.active {
          border-color: var(--gold-500);
          background: rgba(212, 160, 23, 0.05);
        }

        .payment-card__icon {
          font-size: 1.8rem;
          margin-bottom: var(--space-sm);
        }

        .payment-card__name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .payment-card__desc {
          font-size: 0.75rem;
          color: var(--gray-500);
          margin-top: 4px;
        }

        /* Bank details */
        .bank-details {
          background: var(--gray-50);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: var(--space-2xl);
          max-width: 600px;
          margin: 0 auto var(--space-2xl);
          text-align: left;
        }

        .bank-details__title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: var(--space-lg);
          text-align: center;
        }

        .bank-details__row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-sm) 0;
          border-bottom: 1px solid var(--gray-200);
        }

        .bank-details__row:last-child {
          border-bottom: none;
        }

        .bank-details__label {
          font-size: 0.85rem;
          color: var(--gray-500);
        }

        .bank-details__value {
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Impact section */
        .give-impact {
          padding: var(--space-4xl) 0;
          background: var(--navy-900);
          color: var(--white);
          text-align: center;
        }

        .give-impact__title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: var(--space-md);
        }

        .give-impact__sub {
          font-size: 0.95rem;
          color: var(--gray-400);
          max-width: 500px;
          margin: 0 auto var(--space-2xl);
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .impact-stat__number {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--gold-500);
          margin-bottom: var(--space-xs);
        }

        .impact-stat__label {
          font-size: 0.85rem;
          color: var(--gray-400);
        }

        @media (max-width: 768px) {
          .give-options__grid {
            grid-template-columns: 1fr;
          }

          .amount-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .payment-grid {
            grid-template-columns: 1fr;
          }

          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero hero--give" id="heroGive">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Give Generously,<br />Impact Eternally.</h1>
          <p className="hero__subtitle">Your generous giving supports the mission of PENSA-UMaT — building the next generation
            of Christ-centered leaders on campus.</p>
        </div>
      </section>

      {/* ===== SCRIPTURE INTRO ===== */}
      <section className="give-intro" id="giveIntro">
        <div className="container">
          <p className="give-intro__verse">"Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver."</p>
          <p className="give-intro__ref">2 Corinthians 9:7</p>
          <p className="give-intro__text">Every contribution, no matter the size, plays a vital role in sustaining our
            fellowship activities, outreach programs, welfare support, and campus ministry.</p>
        </div>
      </section>

      {/* ===== GIVING OPTIONS ===== */}
      <section className="give-options" id="giveOptions">
        <div className="container">
          <div className="give-options__grid">
            <div className="give-card">
              <div className="give-card__icon">💰</div>
              <h3 className="give-card__title">Tithes</h3>
              <p className="give-card__desc">Honor God with the firstfruits of your increase. Your tithes sustain the ministry
                and keep the fellowship running.</p>
              <button className="btn btn--dark btn--block give-type-btn" onClick={() => setSelectedType('Tithes')}>Give Tithes</button>
            </div>
            <div className="give-card give-card--featured">
              <div className="give-card__icon">🙌</div>
              <h3 className="give-card__title">Offerings</h3>
              <p className="give-card__desc">A freewill offering to support the work of God. Your offering goes toward outreach,
                events, and community support.</p>
              <button className="btn btn--primary btn--block give-type-btn" onClick={() => setSelectedType('Offerings')}>Give Offering</button>
            </div>
            <div className="give-card">
              <div className="give-card__icon">🎁</div>
              <h3 className="give-card__title">Special Seeds</h3>
              <p className="give-card__desc">Plant a seed for a specific cause — building projects, welfare funds, missions
                trips, or campus evangelism drives.</p>
              <button className="btn btn--dark btn--block give-type-btn" onClick={() => setSelectedType('Special Seeds')}>Give Special Seed</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GIVING FORM ===== */}
      <section id="giveForm">
        <div className="container">
          <div className="give-form">
            <h2 className="give-form__heading">Select an Amount — {selectedType}</h2>
            <p className="give-form__sub">Choose a preset amount or enter a custom value</p>
            <div className="amount-grid">
              <button className={`amount-btn ${selectedAmountStr === '10' ? 'active' : ''}`} onClick={() => handleAmountClick('10')}>GHS 10</button>
              <button className={`amount-btn ${selectedAmountStr === '20' ? 'active' : ''}`} onClick={() => handleAmountClick('20')}>GHS 20</button>
              <button className={`amount-btn ${selectedAmountStr === '50' ? 'active' : ''}`} onClick={() => handleAmountClick('50')}>GHS 50</button>
              <button className={`amount-btn ${selectedAmountStr === '100' ? 'active' : ''}`} onClick={() => handleAmountClick('100')}>GHS 100</button>
              <button className={`amount-btn ${selectedAmountStr === '200' ? 'active' : ''}`} onClick={() => handleAmountClick('200')}>GHS 200</button>
              <button className={`amount-btn ${selectedAmountStr === '500' ? 'active' : ''}`} onClick={() => handleAmountClick('500')}>GHS 500</button>
              <button className={`amount-btn ${selectedAmountStr === '1000' ? 'active' : ''}`} onClick={() => handleAmountClick('1000')}>GHS 1,000</button>
              <button className={`amount-btn ${selectedAmountStr === 'custom' ? 'active' : ''}`} onClick={() => handleAmountClick('custom')}>Custom</button>
            </div>
            <div className="give-form__custom">
              <label htmlFor="customAmount">Or enter a custom amount</label>
              <div className="give-form__custom-input">
                <span>GHS</span>
                <input type="number" id="customAmount" placeholder="0.00" min="1" value={customAmount} onChange={handleCustomChange} />
              </div>
            </div>
            <button className="btn btn--primary btn--block" id="proceedGiveBtn" onClick={handleProceed} style={{ padding: '1rem', fontSize: '1rem' }}>Proceed
              to Give →</button>
          </div>
        </div>
      </section>

      {/* ===== PAYMENT METHODS ===== */}
      <section className="payment-methods" id="paymentMethods">
        <div className="container">
          <h3 className="payment-methods__title">Payment Methods</h3>
          <div className="payment-grid">
            <div className="payment-card active">
              <div className="payment-card__icon">📱</div>
              <div className="payment-card__name">Mobile Money</div>
              <div className="payment-card__desc">MTN, Vodafone, AirtelTigo</div>
            </div>
            <div className="payment-card">
              <div className="payment-card__icon">🏦</div>
              <div className="payment-card__name">Bank Transfer</div>
              <div className="payment-card__desc">Direct bank deposit</div>
            </div>
            <div className="payment-card">
              <div className="payment-card__icon">💳</div>
              <div className="payment-card__name">Card Payment</div>
              <div className="payment-card__desc">Visa, Mastercard</div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bank-details">
            <h4 className="bank-details__title">Bank Transfer Details</h4>
            <div className="bank-details__row">
              <span className="bank-details__label">Bank Name</span>
              <span className="bank-details__value">Ghana Commercial Bank (GCB)</span>
            </div>
            <div className="bank-details__row">
              <span className="bank-details__label">Account Name</span>
              <span className="bank-details__value">PENSA-UMaT</span>
            </div>
            <div className="bank-details__row">
              <span className="bank-details__label">Account Number</span>
              <span className="bank-details__value">1234567890</span>
            </div>
            <div className="bank-details__row">
              <span className="bank-details__label">Branch</span>
              <span className="bank-details__value">Tarkwa Branch</span>
            </div>
            <div className="bank-details__row">
              <span className="bank-details__label">MoMo Number</span>
              <span className="bank-details__value">+233 55 123 4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="give-impact" id="giveImpact">
        <div className="container">
          <h2 className="give-impact__title">Your Giving Makes a Difference</h2>
          <p className="give-impact__sub">See how your contributions are impacting the kingdom and our community on campus.</p>
          <div className="impact-stats">
            <div>
              <div className="impact-stat__number">1,200+</div>
              <div className="impact-stat__label">Students Reached</div>
            </div>
            <div>
              <div className="impact-stat__number">50+</div>
              <div className="impact-stat__label">Outreach Events</div>
            </div>
            <div>
              <div className="impact-stat__number">200+</div>
              <div className="impact-stat__label">Welfare Beneficiaries</div>
            </div>
            <div>
              <div className="impact-stat__number">15+</div>
              <div className="impact-stat__label">Community Projects</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
