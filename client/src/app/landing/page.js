// // export default function Home() {
// //   const stages = [
// //     { icon: "01", title: "Frontend", desc: "Build responsive UI with HTML, CSS & JS" },
// //     { icon: "02", title: "Backend", desc: "Create APIs with Node.js & Express" },
// //     { icon: "03", title: "Database", desc: "Design schemas with MongoDB" },
// //     { icon: "04", title: "Auth", desc: "Implement JWT authentication" },
// //     { icon: "05", title: "Deploy", desc: "Ship to production with CI/CD" },
// //   ];

// //   const stats = [
// //     { number: "500+", label: "Survivors" },
// //     { number: "5", label: "Stages of Hell" },
// //     { number: "AI", label: "Powered Validation" },
// //     { number: "100%", label: "Real Projects" },
// //   ];

// //   const Ghost = ({ size = 100 }) => (
// //     <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="white">
// //       <ellipse cx="50" cy="45" rx="38" ry="42" />
// //       <rect x="12" y="45" width="76" height="55" />
// //       <ellipse cx="25" cy="100" rx="13" ry="13" fill="#0a0000" />
// //       <ellipse cx="50" cy="100" rx="13" ry="13" fill="#0a0000" />
// //       <ellipse cx="75" cy="100" rx="13" ry="13" fill="#0a0000" />
// //       <circle cx="38" cy="42" r="7" fill="#0a0000" />
// //       <circle cx="62" cy="42" r="7" fill="#0a0000" />
// //       <circle cx="40" cy="40" r="3" fill="white" />
// //       <circle cx="64" cy="40" r="3" fill="white" />
// //     </svg>
// //   );

// //   const Skull = ({ size = 60 }) => (
// //     <svg width={size} height={size} viewBox="0 0 100 100" fill="#8b0000">
// //       <ellipse cx="50" cy="42" rx="35" ry="38" />
// //       <rect x="22" y="65" width="56" height="25" rx="4" />
// //       <circle cx="36" cy="38" r="12" fill="#0a0000" />
// //       <circle cx="64" cy="38" r="12" fill="#0a0000" />
// //       <rect x="28" y="72" width="10" height="14" rx="2" fill="#0a0000" />
// //       <rect x="45" y="72" width="10" height="14" rx="2" fill="#0a0000" />
// //       <rect x="62" y="72" width="10" height="14" rx="2" fill="#0a0000" />
// //       <ellipse cx="50" cy="58" rx="6" ry="4" fill="#0a0000" />
// //     </svg>
// //   );

// //   const Web = ({ size = 220 }) => (
// //     <svg width={size} height={size} viewBox="0 0 220 220">
// //       {[0,30,60,90,120,150].map((angle, i) => (
// //         <line key={i} x1="0" y1="0"
// //           x2={Math.cos(angle * Math.PI / 180) * 220}
// //           y2={Math.sin(angle * Math.PI / 180) * 220}
// //           stroke="#cc0000" strokeWidth="1.2" />
// //       ))}
// //       {[35,70,105,145,185].map((r, i) => (
// //         <path key={i} d={`M ${r} 0 Q ${r*0.7} ${r*0.7} 0 ${r}`}
// //           fill="none" stroke="#cc0000" strokeWidth="1" />
// //       ))}
// //     </svg>
// //   );

// //   const drips = [50,70,38,80,45,72,40,60,52,68,55,42,75,48,62,35,58,44,66,39,73,47,63,51,69];

// //   return (
// //     <div style={{ background: "#0a0000", color: "#e8d5d5", overflowX: "hidden", position: "relative", padding: "0 16px", boxSizing: "border-box" }}>

// //       {/* Spider webs */}
// //       <div style={{ position: "fixed", top: 56, left: 0, opacity: 0.5, pointerEvents: "none", zIndex: 1 }}><Web /></div>
// //       <div style={{ position: "fixed", top: 56, right: 0, opacity: 0.5, pointerEvents: "none", zIndex: 1, transform: "scaleX(-1)" }}><Web /></div>

// //       {/* Blood drips - full width */}
      
// //       <div style={{ position: "fixed", top: 56, left: 0, right: 0, height: "80px", zIndex: 5, pointerEvents: "none", display: "flex", justifyContent: "space-between", padding: "0 8px" }}>
// //         {drips.map((h, i) => (
// //           <div key={i} style={{ width: "7px", height: `${h}px`, background: "linear-gradient(to bottom, #5a0000, #cc0000, #ff4444)", borderRadius: "0 0 6px 6px", opacity: 0.9 }} />
// //         ))}
// //       </div>

// //       {/* Ghosts */}
// //       <div style={{ position: "fixed", top: "22%", left: "8px", opacity: 0.45, animation: "ghostFloat 6s ease-in-out infinite", pointerEvents: "none", zIndex: 2 }}><Ghost size={100} /></div>
// //       <div style={{ position: "fixed", top: "38%", right: "8px", opacity: 0.4, animation: "ghostFloat 8s ease-in-out infinite reverse", pointerEvents: "none", zIndex: 2 }}><Ghost size={80} /></div>

// //       {/* Glowing eyes */}
// //       <div style={{ position: "fixed", top: "55%", right: "2.5%", pointerEvents: "none", zIndex: 2, animation: "eyeGlow 3s ease-in-out infinite" }}>
// //         <svg width="55" height="22" viewBox="0 0 55 22">
// //           <ellipse cx="13" cy="11" rx="9" ry="6" fill="#ff2020" opacity="0.8" />
// //           <ellipse cx="42" cy="11" rx="9" ry="6" fill="#ff2020" opacity="0.8" />
// //           <circle cx="13" cy="11" r="4" fill="#000" />
// //           <circle cx="42" cy="11" r="4" fill="#000" />
// //         </svg>
// //       </div>
// //       <div style={{ position: "fixed", top: "72%", left: "1.5%", pointerEvents: "none", zIndex: 2, animation: "eyeGlow 4s ease-in-out infinite reverse" }}>
// //         <svg width="55" height="22" viewBox="0 0 55 22">
// //           <ellipse cx="13" cy="11" rx="9" ry="6" fill="#ff2020" opacity="0.8" />
// //           <ellipse cx="42" cy="11" rx="9" ry="6" fill="#ff2020" opacity="0.8" />
// //           <circle cx="13" cy="11" r="4" fill="#000" />
// //           <circle cx="42" cy="11" r="4" fill="#000" />
// //         </svg>
// //       </div>

// //       {/* HERO - full viewport height, perfectly centered */}
// //       <section style={{
// //         width: "100%",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         textAlign: "center",
// //         padding: "clamp(80px, 12vw, 120px) 20px 60px",
// //         boxSizing: "border-box",
// //         position: "relative",
// //         zIndex: 2,
// //         background: "radial-gradient(ellipse at center, #1a000044 0%, transparent 65%)"
// //       }}>
// //         <p style={{ color: "#ff2020", fontFamily: "Special Elite, cursive", letterSpacing: "8px", marginBottom: "24px", fontSize: "0.75rem" }}>
// //           STAGE-BASED LEARNING
// //         </p>
// //         <h1 className="glitch" style={{
// //           fontFamily: "Creepster, cursive",
// //           fontSize: "clamp(3.5rem, 9vw, 8rem)",
// //           color: "#fff",
// //           lineHeight: 1.0,
// //           marginBottom: "32px",
// //           width: "100%",
// //           maxWidth: "1100px"
// //         }}>
// //           LEARN TO BUILD.<br />
// //           <span style={{ color: "#ff2020" }}>OR FAIL TRYING.</span>
// //         </h1>
// //         <p style={{ maxWidth: "580px", fontSize: "1.05rem", color: "#b0a0a0", lineHeight: 1.9, marginBottom: "48px" }}>
// //           Devino guides you through building real full-stack apps. Each stage is locked until AI validates your code. No shortcuts. No excuses.
// //         </p>
// //         <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
// //           <button className="btn-horror pulse-glow" style={{ fontSize: "1.1rem", padding: "16px 44px" }}>Start Your Journey</button>
// //           <button style={{ background: "transparent", border: "1px solid #8b0000", color: "#e8d5d5", padding: "16px 44px", fontFamily: "Creepster, cursive", letterSpacing: "2px", cursor: "pointer", fontSize: "1.1rem" }}>View Demo</button>
// //         </div>
// //       </section>

// //       {/* Stats bar */}
// //       <section style={{ borderTop: "1px solid #8b0000", borderBottom: "1px solid #8b0000", padding: "40px", background: "#0f0000", position: "relative", zIndex: 2 }}>
// //         <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", textAlign: "center" }}>
// //           {stats.map((s, i) => (
// //             <div key={i} style={{ borderRight: i < 3 ? "1px solid #8b0000" : "none", padding: "0 20px" }}>
// //               <div style={{ fontFamily: "Creepster, cursive", fontSize: "3rem", color: "#ff2020", letterSpacing: "2px" }}>{s.number}</div>
// //               <div style={{ color: "#b0a0a0", fontSize: "0.78rem", letterSpacing: "3px", marginTop: "6px" }}>{s.label.toUpperCase()}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Stages */}
// //       <section style={{ padding: "clamp(60px, 10vw, 80px) 20px", maxWidth: "1300px", margin: "0 auto", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 2 }}>
// //         <h2 style={{ fontFamily: "Creepster, cursive", fontSize: "2.8rem", textAlign: "center", color: "#ff2020", marginBottom: "52px", letterSpacing: "4px" }}>
// //           THE 5 STAGES OF SURVIVAL
// //         </h2>
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
// //           {stages.map((stage, i) => (
// //             <div key={i} className="card-horror" style={{ textAlign: "center", padding: "32px 16px" }}>
// //               <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}><Skull size={44} /></div>
// //               <div style={{ fontSize: "1.1rem", color: "#8b0000", fontFamily: "Creepster, cursive", marginBottom: "6px" }}>{stage.icon}</div>
// //               <h3 style={{ fontFamily: "Creepster, cursive", fontSize: "1.25rem", color: "#ff2020", marginBottom: "10px" }}>{stage.title}</h3>
// //               <p style={{ color: "#b0a0a0", fontSize: "0.83rem", lineHeight: 1.6 }}>{stage.desc}</p>
// //               <div style={{ marginTop: "16px", padding: "4px 12px", background: "#1a0505", border: "1px solid #8b0000", display: "inline-block", fontSize: "0.7rem", color: "#666", letterSpacing: "1px" }}>STAGE {i + 1}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* How it works */}
// //       <section style={{ padding: "clamp(60px, 10vw, 80px) 20px", background: "#0f0000", borderTop: "1px solid #8b0000", position: "relative", zIndex: 2 }}>
// //         <h2 style={{ fontFamily: "Creepster, cursive", fontSize: "2.5rem", textAlign: "center", color: "#ff2020", marginBottom: "52px", letterSpacing: "3px" }}>
// //           HOW IT WORKS
// //         </h2>
// //         <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
// //           {[
// //             { step: "01", title: "Pick a Project", desc: "Choose a full-stack project to build from scratch" },
// //             { step: "02", title: "Code Each Stage", desc: "Complete frontend, backend, DB, auth and deployment" },
// //             { step: "03", title: "Pass AI Review", desc: "Our AI validates your code before unlocking next stage" },
// //           ].map((item, i) => (
// //             <div key={i} style={{ padding: "32px 24px", borderLeft: "3px solid #8b0000", background: "#0a0000" }}>
// //               <div style={{ fontFamily: "Creepster, cursive", fontSize: "3.5rem", color: "#8b0000", opacity: 0.4, lineHeight: 1 }}>{item.step}</div>
// //               <h3 style={{ fontFamily: "Creepster, cursive", fontSize: "1.4rem", color: "#fff", margin: "14px 0 10px" }}>{item.title}</h3>
// //               <p style={{ color: "#b0a0a0", fontSize: "0.92rem", lineHeight: 1.7 }}>{item.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section style={{ textAlign: "center", padding: "120px 24px", borderTop: "1px solid #8b0000", position: "relative", zIndex: 2 }}>
// //         <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px", marginBottom: "32px" }}>
// //           <Skull size={48} /><Skull size={64} /><Skull size={48} />
// //         </div>
// //         <h2 style={{ fontFamily: "Creepster, cursive", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", marginBottom: "20px" }}>READY TO FACE YOUR FEARS?</h2>
// //         <p style={{ color: "#b0a0a0", marginBottom: "40px", fontSize: "1rem" }}>Join developers who survived the Devino challenge.</p>
// //         <button className="btn-horror pulse-glow" style={{ fontSize: "1.2rem", padding: "18px 56px" }}>Enter If You Dare</button>
// //       </section>

// //       <style>{`
// //         @keyframes ghostFloat {
// //           0%, 100% { transform: translateY(0px) rotate(-3deg); }
// //           50% { transform: translateY(-25px) rotate(3deg); }
// //         }
// //         @keyframes eyeGlow {
// //           0%, 100% { opacity: 0.15; }
// //           50% { opacity: 1; }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }



// import Ghost from "@/components/Ghost";
// import Skull from "@/components/Skull";
// import Web from "@/components/Web";
// import StageCard from "@/components/StageCard";
// import StatCard from "@/components/StatCard";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

 

// import AuthGuard from "@/components/AuthGuard";
// import Navbar from "@/components/Navbar";

// export default function Home() 
// {
//   const stages = [
//     { icon: "01", title: "Frontend", desc: "Build responsive UI with HTML, CSS & JS" },
//     { icon: "02", title: "Backend", desc: "Create APIs with Node.js & Express" },
//     { icon: "03", title: "Database", desc: "Design schemas with MongoDB" },
//     { icon: "04", title: "Auth", desc: "Implement JWT authentication" },
//     { icon: "05", title: "Deploy", desc: "Ship to production with CI/CD" },
//   ];

//   const stats = [
//     { number: "500+", label: "Survivors" },
//     { number: "5", label: "Stages of Hell" },
//     { number: "AI", label: "Powered Validation" },
//     { number: "100%", label: "Real Projects" },
//   ];

//   const drips = [
//     50,70,38,80,45,72,40,60,52,68,55,42,
//     75,48,62,35,58,44,66,39,73,47,63,51,69
//   ];
//   return (

//     <AuthGuard>

//       <Navbar />

//        return (
//     <div
//       style={{
//         background: "#0a0000",
//         color: "#e8d5d5",
//         overflowX: "hidden",
//         position: "relative",
//         padding: "0 16px",
//         boxSizing: "border-box"
//       }}
//     >

//       {/* Spider Webs */}
//       <div style={{
//         position: "fixed",
//         top: 56,
//         left: 0,
//         opacity: 0.5,
//         pointerEvents: "none",
//         zIndex: 1
//       }}>
//         <Web />
//       </div>

//       <div style={{
//         position: "fixed",
//         top: 56,
//         right: 0,
//         opacity: 0.5,
//         pointerEvents: "none",
//         zIndex: 1,
//         transform: "scaleX(-1)"
//       }}>
//         <Web />
//       </div>

//       {/* Blood Drips */}
//       <div style={{
//         position: "fixed",
//         top: 56,
//         left: 0,
//         right: 0,
//         height: "80px",
//         zIndex: 5,
//         pointerEvents: "none",
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "0 8px"
//       }}>
//         {drips.map((h, i) => (
//           <div
//             key={i}
//             style={{
//               width: "7px",
//               height: `${h}px`,
//               background:
//                 "linear-gradient(to bottom, #5a0000, #cc0000, #ff4444)",
//               borderRadius: "0 0 6px 6px",
//               opacity: 0.9
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating Ghosts */}
//       <div style={{
//         position: "fixed",
//         top: "22%",
//         left: "8px",
//         opacity: 0.45,
//         animation: "ghostFloat 6s ease-in-out infinite",
//         pointerEvents: "none",
//         zIndex: 2
//       }}>
//         <Ghost size={100} />
//       </div>

//       <div style={{
//         position: "fixed",
//         top: "38%",
//         right: "8px",
//         opacity: 0.4,
//         animation: "ghostFloat 8s ease-in-out infinite reverse",
//         pointerEvents: "none",
//         zIndex: 2
//       }}>
//         <Ghost size={80} />
//       </div>

//       {/* HERO SECTION */}
//       <section
//         style={{
//           width: "100%",
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           padding: "clamp(80px, 12vw, 120px) 20px 60px",
//           position: "relative",
//           zIndex: 2,
//           background:
//             "radial-gradient(ellipse at center, #1a000044 0%, transparent 65%)"
//         }}
//       >

//         <p style={{
//           color: "#ff2020",
//           fontFamily: "Special Elite, cursive",
//           letterSpacing: "8px",
//           marginBottom: "24px",
//           fontSize: "0.75rem"
//         }}>
//           STAGE-BASED LEARNING
//         </p>

//         <h1
//           style={{
//             fontFamily: "Creepster, cursive",
//             fontSize: "clamp(3.5rem, 9vw, 8rem)",
//             color: "#fff",
//             lineHeight: 1,
//             marginBottom: "32px",
//             maxWidth: "1100px"
//           }}
//         >
//           LEARN TO BUILD.
//           <br />
//           <span style={{ color: "#ff2020" }}>
//             OR FAIL TRYING.
//           </span>
//         </h1>

//         <p style={{
//           maxWidth: "580px",
//           fontSize: "1.05rem",
//           color: "#b0a0a0",
//           lineHeight: 1.9,
//           marginBottom: "48px"
//         }}>
//           Devino guides you through building real full-stack apps.
//           Each stage is locked until AI validates your code.
//           No shortcuts. No excuses.
//         </p>

//         <div style={{
//           display: "flex",
//           gap: "20px",
//           justifyContent: "center",
//           flexWrap: "wrap"
//         }}>
//           <button
//             className="btn-horror pulse-glow"
//             style={{
//               fontSize: "1.1rem",
//               padding: "16px 44px"
//             }}
//           >
//             Start Your Journey
//           </button>

//           <button
//             style={{
//               background: "transparent",
//               border: "1px solid #8b0000",
//               color: "#e8d5d5",
//               padding: "16px 44px",
//               fontFamily: "Creepster, cursive",
//               letterSpacing: "2px",
//               cursor: "pointer",
//               fontSize: "1.1rem"
//             }}
//           >
//             View Demo
//           </button>
//         </div>

//       </section>

//       {/* STATS */}
//       <section style={{
//         borderTop: "1px solid #8b0000",
//         borderBottom: "1px solid #8b0000",
//         padding: "40px",
//         background: "#0f0000"
//       }}>
//         <div style={{
//           maxWidth: "1000px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns:
//             "repeat(auto-fit, minmax(180px, 1fr))"
//         }}>
//           {stats.map((stat, i) => (
//             <StatCard key={i} stat={stat} />
//           ))}
//         </div>
//       </section>

//       {/* STAGES */}
//       {/* STAGES */}
// <section
//   style={{
//     padding: "clamp(80px, 10vw, 100px) 20px",
//     maxWidth: "1300px",
//     margin: "0 auto",
//     position: "relative",
//     background: "radial-gradient(circle at center, #140000 0%, #050000 70%)",
//   }}
// >
//   <h2
//     style={{
//       fontFamily: "Creepster, cursive",
//       fontSize: "3rem",
//       textAlign: "center",
//       color: "#ff2020",
//       marginBottom: "60px",
//       letterSpacing: "4px",
//       textShadow: "0 0 12px rgba(255,0,0,0.6)",
//     }}
//   >
//     THE 5 STAGES OF SURVIVAL
//   </h2>

//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
//       gap: "24px",
//     }}
//   >
//     {stages.map((stage, i) => (
//       <StageCard key={i} stage={stage} index={i} />
//     ))}
//   </div>
// </section>

//       {/* HOW IT WORKS */}
//       <section style={{
//         padding: "clamp(60px, 10vw, 80px) 20px",
//         background: "#0f0000",
//         borderTop: "1px solid #8b0000"
//       }}>

//         <h2 style={{
//           fontFamily: "Creepster, cursive",
//           fontSize: "2.5rem",
//           textAlign: "center",
//           color: "#ff2020",
//           marginBottom: "52px",
//           letterSpacing: "3px"
//         }}>
//           HOW IT WORKS
//         </h2>

//         <div style={{
//           maxWidth: "1000px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns:
//             "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "40px"
//         }}>
//           {[
//             {
//               step: "01",
//               title: "Pick a Project",
//               desc: "Choose a full-stack project to build"
//             },
//             {
//               step: "02",
//               title: "Code Each Stage",
//               desc: "Complete frontend, backend, DB, auth"
//             },
//             {
//               step: "03",
//               title: "Pass AI Review",
//               desc: "AI validates before next stage"
//             }
//           ].map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 padding: "32px 24px",
//                 borderLeft: "3px solid #8b0000",
//                 background: "#0a0000"
//               }}
//             >
//               <div style={{
//                 fontFamily: "Creepster, cursive",
//                 fontSize: "3.5rem",
//                 color: "#8b0000",
//                 opacity: 0.4
//               }}>
//                 {item.step}
//               </div>

//               <h3 style={{
//                 fontFamily: "Creepster, cursive",
//                 color: "#fff",
//                 margin: "14px 0"
//               }}>
//                 {item.title}
//               </h3>

//               <p style={{
//                 color: "#b0a0a0",
//                 fontSize: "0.92rem"
//               }}>
//                 {item.desc}
//               </p>

//             </div>
//           ))}
//         </div>

//       </section>

//       {/* CTA */}
//       <section style={{
//         textAlign: "center",
//         padding: "120px 24px",
//         borderTop: "1px solid #8b0000"
//       }}>
//         <div style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "24px",
//           marginBottom: "32px"
//         }}>
//           <Skull size={48}/>
//           <Skull size={64}/>
//           <Skull size={48}/>
//         </div>

//         <h2 style={{
//           fontFamily: "Creepster, cursive",
//           fontSize: "clamp(2.5rem, 5vw, 4rem)",
//           color: "#fff",
//           marginBottom: "20px"
//         }}>
//           READY TO FACE YOUR FEARS?
//         </h2>

//         <p style={{
//           color: "#b0a0a0",
//           marginBottom: "40px"
//         }}>
//           Join developers who survived the Devino challenge.
//         </p>

//         <button
//           className="btn-horror pulse-glow"
//           style={{
//             fontSize: "1.2rem",
//             padding: "18px 56px"
//           }}
//         >
//           Enter If You Dare
//         </button>
//       </section>

//       {/* Footer */}
//       <Footer />

//       {/* Animations */}
//       <style>{`
//         @keyframes ghostFloat {
//           0%,100% { transform: translateY(0px) rotate(-3deg); }
//           50% { transform: translateY(-25px) rotate(3deg); }
//         }
//       `}</style>

//     </div>
//   );
// }


//     </AuthGuard>

//   );
// }


import React from "react";
import Ghost from "@/components/Ghost";
import Skull from "@/components/Skull";
import Web from "@/components/Web";
import StageCard from "@/components/StageCard";
import StatCard from "@/components/StatCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthGuard from "@/components/AuthGuard";


export default function Home() {
  const stages = [
    { icon: "01", title: "Frontend", desc: "Build responsive UI with HTML, CSS & JS" },
    { icon: "02", title: "Backend", desc: "Create APIs with Node.js & Express" },
    { icon: "03", title: "Database", desc: "Design schemas with MongoDB" },
    { icon: "04", title: "Auth", desc: "Implement JWT authentication" },
    { icon: "05", title: "Deploy", desc: "Ship to production with CI/CD" },
  ];

  const stats = [
    { number: "500+", label: "Survivors" },
    { number: "5", label: "Stages of Hell" },
    { number: "AI", label: "Powered Validation" },
    { number: "100%", label: "Real Projects" },
  ];

  const drips = [
    50, 70, 38, 80, 45, 72, 40, 60, 52, 68, 55, 42, 75, 48, 62, 35, 58, 44, 66,
    39, 73, 47, 63, 51, 69,
  ];

  return (
    <AuthGuard>
      <div
        style={{
          background: "#0a0000",
          color: "#e8d5d5",
          overflowX: "hidden",
          position: "relative",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        
        {/* Spider Webs */}
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <Web />
        </div>

        <div
          style={{
            position: "fixed",
            top: 56,
            right: 0,
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 1,
            transform: "scaleX(-1)",
          }}
        >
          <Web />
        </div>

        {/* Blood Drips */}
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            height: "80px",
            zIndex: 5,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 8px",
          }}
        >
          {drips.map((h, i) => (
            <div
              key={i}
              style={{
                width: "7px",
                height: `${h}px`,
                background: "linear-gradient(to bottom, #5a0000, #cc0000, #ff4444)",
                borderRadius: "0 0 6px 6px",
                opacity: 0.9,
              }}
            />
          ))}
        </div>

        {/* Floating Ghosts */}
        <div
          style={{
            position: "fixed",
            top: "22%",
            left: "8px",
            opacity: 0.45,
            animation: "ghostFloat 6s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <Ghost size={100} />
        </div>

        <div
          style={{
            position: "fixed",
            top: "38%",
            right: "8px",
            opacity: 0.4,
            animation: "ghostFloat 8s ease-in-out infinite reverse",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <Ghost size={80} />
        </div>

        {/* HERO SECTION */}
        <section
          style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(80px, 12vw, 120px) 20px 60px",
            position: "relative",
            zIndex: 2,
            background: "radial-gradient(ellipse at center, #1a000044 0%, transparent 65%)",
          }}
        >
          <p
            style={{
              color: "#ff2020",
              fontFamily: "Special Elite, cursive",
              letterSpacing: "8px",
              marginBottom: "24px",
              fontSize: "0.75rem",
            }}
          >
            STAGE-BASED LEARNING
          </p>

          <h1
            style={{
              fontFamily: "Creepster, cursive",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "32px",
              maxWidth: "1100px",
            }}
          >
            LEARN TO BUILD.
            <br />
            <span style={{ color: "#ff2020" }}>OR FAIL TRYING.</span>
          </h1>

          <p
            style={{
              maxWidth: "580px",
              fontSize: "1.05rem",
              color: "#b0a0a0",
              lineHeight: 1.9,
              marginBottom: "48px",
            }}
          >
            Devino guides you through building real full-stack apps. Each stage
            is locked until AI validates your code. No shortcuts. No excuses.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-horror pulse-glow"
              style={{
                fontSize: "1.1rem",
                padding: "16px 44px",
              }}
            >
              Start Your Journey
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #8b0000",
                color: "#e8d5d5",
                padding: "16px 44px",
                fontFamily: "Creepster, cursive",
                letterSpacing: "2px",
                cursor: "pointer",
                fontSize: "1.1rem",
              }}
            >
              View Demo
            </button>
          </div>
        </section>

        {/* STATS */}
        <section
          style={{
            borderTop: "1px solid #8b0000",
            borderBottom: "1px solid #8b0000",
            padding: "40px",
            background: "#0f0000",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </section>

        {/* STAGES */}
        <section
          style={{
            padding: "clamp(80px, 10vw, 100px) 20px",
            maxWidth: "1300px",
            margin: "0 auto",
            position: "relative",
            background: "radial-gradient(circle at center, #140000 0%, #050000 70%)",
          }}
        >
          <h2
            style={{
              fontFamily: "Creepster, cursive",
              fontSize: "3rem",
              textAlign: "center",
              color: "#ff2020",
              marginBottom: "60px",
              letterSpacing: "4px",
              textShadow: "0 0 12px rgba(255,0,0,0.6)",
            }}
          >
            THE 5 STAGES OF SURVIVAL
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "24px",
            }}
          >
            {stages.map((stage, i) => (
              <StageCard key={i} stage={stage} index={i} />
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          style={{
            padding: "clamp(60px, 10vw, 80px) 20px",
            background: "#0f0000",
            borderTop: "1px solid #8b0000",
          }}
        >
          <h2
            style={{
              fontFamily: "Creepster, cursive",
              fontSize: "2.5rem",
              textAlign: "center",
              color: "#ff2020",
              marginBottom: "52px",
              letterSpacing: "3px",
            }}
          >
            HOW IT WORKS
          </h2>

          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                step: "01",
                title: "Pick a Project",
                desc: "Choose a full-stack project to build",
              },
              {
                step: "02",
                title: "Code Each Stage",
                desc: "Complete frontend, backend, DB, auth",
              },
              {
                step: "03",
                title: "Pass AI Review",
                desc: "AI validates before next stage",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 24px",
                  borderLeft: "3px solid #8b0000",
                  background: "#0a0000",
                }}
              >
                <div
                  style={{
                    fontFamily: "Creepster, cursive",
                    fontSize: "3.5rem",
                    color: "#8b0000",
                    opacity: 0.4,
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    fontFamily: "Creepster, cursive",
                    color: "#fff",
                    margin: "14px 0",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#b0a0a0",
                    fontSize: "0.92rem",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "120px 24px",
            borderTop: "1px solid #8b0000",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <Skull size={48} />
            <Skull size={64} />
            <Skull size={48} />
          </div>

          <h2
            style={{
              fontFamily: "Creepster, cursive",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            READY TO FACE YOUR FEARS?
          </h2>

          <p
            style={{
              color: "#b0a0a0",
              marginBottom: "40px",
            }}
          >
            Join developers who survived the Devino challenge.
          </p>

          <button
            className="btn-horror pulse-glow"
            style={{
              fontSize: "1.2rem",
              padding: "18px 56px",
            }}
          >
            Enter If You Dare
          </button>
        </section>

        <Footer />

        {/* Animations */}
        <style>{`
          @keyframes ghostFloat {
            0%,100% { transform: translateY(0px) rotate(-3deg); }
            50% { transform: translateY(-25px) rotate(3deg); }
          }
        `}</style>
      </div>
    </AuthGuard>
  );
}