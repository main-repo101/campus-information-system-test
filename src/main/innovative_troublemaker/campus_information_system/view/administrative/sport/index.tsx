import * as React from "react";
import * as MUI from "@mui/icons-material";

const ViewSport: React.FC = () => {

    const [getObj, setObj] = React.useState<String>("🏀");

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setObj( (prev) => ( 
            (prev !== "NEW IMAGE") ? "NEW IMAGE" : "🏀"
        ));
    };

    return (
        <>
            <div className="container" style={{ fontFamily: "Arial, sans-serif" }}>
                <h1 style={{ fontSize: "35px", textAlign: "center", marginBottom: "30px" }}>
                    Coach of the Basketball Teams <span onClick={handleClick}>{getObj}</span>
                </h1>

                {/* Main Image in Portrait View */}
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px" }}>
                    {[
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/462564092_1633251683980687_8808671784094145273_n.png?stp=dst-png_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF8_SENsM1CF4edZn9eSc7jHpym1Ir_4GYenKbUiv_gZujUZQov79ucDbufAlAMUtnROJ9ydZosgpFI1x6CAi2g&_nc_ohc=rGjphhxJAecQ7kNvgFyct3k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHRukB1Tnwiyz-syXfGry-OQ-OieBGeJYjkBl3SzN8xgA&oe=676823C2",
                    ].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Men's Basketball ${index + 1}`}
                            style={{
                                width: "30%",
                                height: "auto",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                            }}
                        />
                    ))}

                </div>
                <br />

                <h1
                    style={{
                        fontSize: "24px",
                        textAlign: "center",
                        marginBottom: "25px",
                        fontWeight: "bold",        // Make the text bold
                        letterSpacing: "1.5px",    // Slight spacing between letters
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Add a light shadow
                    }}
                >
                    Howard P. Delgado <span onClick={handleClick}>{getObj}</span>
                </h1>

                {/* Section Divider */}
                <hr style={{ border: "1px dotted #ccc", margin: "30px 0" }} />

                {/* Men's Basketball Section */}
                <div className={`bg-slate-500/80`} style={{ padding: "20px", backgroundColor: "", borderRadius: "10px" }}>
                    <h1 style={{ fontSize: "25px", textAlign: "center" }}>Men's Basketball Team 🏀</h1>
                    <p style={{ lineHeight: "1.6", textAlign: "center", marginBottom: "20px" }}>
                        Get the latest scores, highlights, and news from our school basketball team. Stay up to date with the team's games, performances, and achievements!
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px" }}>
                        {[
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/465640234_1069550488304287_3872041722805473608_n.png?stp=dst-png_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHV4h2zfD8W0QHvEQ_SbXXjllE5wP_UtDGWUTnA_9S0MSPgg45DiL7kAIHKUcivUAHrsa0BgbRMnJ1fMAebqdUo&_nc_ohc=TpOJEkxzF8sQ7kNvgF77vbG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHDbkqFmen6bUtTA5xEWIEWjBfy6ztgeBuns23gHnenHQ&oe=676833C2",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462650597_855896480083435_4361311049266564152_n.png?stp=dst-png_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFv5orQn7UbLdNDJXkcLzpJL75VkW_zZK4vvlWRb_Nkrod_PTP-pJfmykt1Vh-z89fa0z2doTLQNY8xM5Pf9grn&_nc_ohc=tvbU1jWqb0AQ7kNvgEAQtiD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGXOgUZKaHYDSB4dnVJZSMGCzPDtuPzyrTVD3YNV8Eh5A&oe=67682A72",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462642887_1765269000984223_8381119070142608835_n.png?stp=dst-png_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHzJKEjEwUY_tF8dw6fvKj5wOS1zNbd8QDA5LXM1t3xAD6KzK5XF4C4tFuZvnD8UCKk2P4-yhtYfGo1CF8ddJmS&_nc_ohc=W1Dmw_LJO2QQ7kNvgG_gA1Z&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QE_3KoHlBb2XheeYbV_be2QZiXrRi2bFFDn0cEqJUVQ3A&oe=67682CDD",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Men's Basketball ${index + 1}`}
                                style={{
                                    width: "30%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Section Divider */}
                <hr style={{ border: "1px dotted #ccc", margin: "30px 0" }} />

                {/* Women's Basketball Section */}
                <div className={`bg-rose-500/80`}   style={{ padding: "20px", borderRadius: "10px" }}>
                    <h1 style={{ fontSize: "25px", textAlign: "center" }}>Women's Basketball Team 🏀</h1>
                    <p style={{ lineHeight: "1.6", textAlign: "center", marginBottom: "20px" }}>
                        Celebrate the inspiring achievements of our school's women's basketball team. Follow the excitement of their matches, events, and stories that highlight their journey!
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px" }}>
                        {[
                            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.15752-9/462562860_1949201915589458_8633915871925121170_n.png?stp=dst-png_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGRzhJxzwW_5zCinkVcaTumblIFOzWwXGBuUgU7NbBcYCwfroxPcHhNt8lEXJ8OKCStzsIDfd9BhQ_01EWAyb3T&_nc_ohc=ArSwsw91g-AQ7kNvgHbTxxE&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&oh=03_Q7cD1QGNa0xX0W-ybBfvfH66kaOWPzLJYgMoF_TiL8Xuu3Yi3Q&oe=676823E2",
                            "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.15752-9/462562897_3043138745840294_5479165589760394502_n.png?stp=dst-png_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGtdVMyf620xPUQpDa7MSOFe90I5TiC8ph73QjlOILymGyVP2CWXqrEPayiK3JNmm-5PDUPXXM1sAvEh4BfTICy&_nc_ohc=JcgY-xf7dCsQ7kNvgFOym5T&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&oh=03_Q7cD1QGv6BGVFJAD6CWae_037VdHeLGelFgnXjEK9ZWAy8gBkw&oe=6768360D",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462644396_1282776669816876_7413298635847422352_n.png?stp=dst-png_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFNCZN499uWXQSFZb84W3uSFwbCvvomW8QXBsK--iZbxAD7eXtXqIaUvK7MTwNht96A0u7dtNxODMLT5xuZhJkW&_nc_ohc=xvDXP2spgk0Q7kNvgFMM6bx&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGZy9-GxqxK3JPW8vvBe1Zm8Etu6iPMdXwgQwalTr1Evw&oe=6768365D",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Women's Basketball ${index + 1}`}
                                style={{
                                    width: "25%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Section Divider */}
                <hr style={{ border: "1px dotted #ccc", margin: "30px 0" }} />

                {/* Sining Tala Section */}
                <div className={`bg-yellow-500/50`} style={{ padding: "20px", backgroundColor: "", borderRadius: "10px" }}>
                    <h1 style={{ fontSize: "33px", textAlign: "center" }}>Sining Tala 🎭</h1>
                    <p style={{ lineHeight: "1.6", textAlign: "center", marginBottom: "20px" }}>
                        Explore the world of artistry and culture with *Sining Tala*, where the rhythm of creativity meets the heart of our school's performances. Here, students and faculty unite in celebrating the beauty of art, music, drama, and dance.
                        Stay tuned for updates and upcoming events that showcase the talented individuals who make our school community vibrant and artistic!
                    </p>

                    <h3 style={{ fontSize: "22px", textAlign: "center", marginTop: "30px" }}>Our Vision</h3>
                    <p style={{ textAlign: "center", lineHeight: "1.6", marginBottom: "20px" }}>
                        At *Sining Tala*, we believe that the arts are a powerful form of expression that helps nurture creativity, self-confidence, and collaboration. Our vision is to create a space where students can express themselves freely, explore different artistic forms, and deepen their appreciation for the beauty of life.
                    </p>

                    <h3 style={{ fontSize: "22px", textAlign: "center", marginTop: "30px" }}>Upcoming Events</h3>
                    <p style={{ textAlign: "center", lineHeight: "1.6", marginBottom: "20px" }}>
                        Get ready for a series of exciting events throughout the school year, including drama performances, music recitals, and art exhibitions. These events are designed to celebrate our students' hard work and dedication to their craft. Be sure to attend and support your peers as they showcase their talents!
                    </p>

                    <h3 style={{ fontSize: "22px", textAlign: "center", marginTop: "30px" }}>Join Us!</h3>
                    <p style={{ textAlign: "center", lineHeight: "1.6", marginBottom: "20px" }}>
                        Whether you're a performer or an admirer of the arts, *Sining Tala* invites you to get involved. Join us in creating an inspiring and supportive environment for artistic expression. Whether through participating in events, helping with productions, or simply attending the performances, you can make a difference in our thriving arts community!
                    </p>

                    {/* Artworks Gallery */}
                    <h3 style={{ fontSize: "22px", textAlign: "center", marginTop: "30px" }}>Our Gallery</h3>
                    <p style={{ textAlign: "center", lineHeight: "1.6", marginBottom: "20px" }}>
                        Here's a glimpse of the vibrant artwork from our students, capturing the essence of their artistic journey. From expressive paintings to dynamic performances, these pieces reflect the creative spirit of our school community.
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px" }}>
                        {[
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462638912_908015241286329_8053826620042180470_n.png?stp=dst-png_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGKEBjwVr1PhgjHNRdTBiolQgCbbl93B2JCAJtuX3cHYulUQpCrWwqOS1imQzMRuWr4fWAz6PigsbZ8U1VPlKHw&_nc_ohc=BZ6bxIwNx2EQ7kNvgEqtaZG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHi1UQM5kSI5nRy2McKnSvSFEAFoafa_kfoEfeQ4Q8ToA&oe=67681BD9",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462650608_490041823417852_8841129355264107152_n.png?stp=dst-png_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeETGj8YQbATZblpmjEpZMZRF_w677Ba2r4X_DrvsFravl4pA8Pu-RtgY0gtfLLEGBvwMBx4umGWsBWHSOf80kNZ&_nc_ohc=9gEF2Wwmo2kQ7kNvgGl-S9E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF32rX5jNIKffGD9aDPabMemVHPFJsptTHuFw-NAXXr2g&oe=67683271",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/462645568_1103197418062897_2217828666907984020_n.png?stp=dst-png_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH4ohB8iFmZ1pmcojLbaJVvJUQMMOzzK6clRAww7PMrpxecMhHI8tGhrDr7ui6Kk7XrAI-QMMHthUJKPMKl3G6O&_nc_ohc=YU2HrumdVxEQ7kNvgGrdXwV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEzVyEkeY4AzQ3sJ35Vjpky3n3Y5wbrltFN1T3BcGnp5g&oe=67681759",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/467475954_2058545474589663_1462310918169941267_n.png?stp=dst-png_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEJdphZN2cpoWpNiwyS0SGRS0l6d210Vl5LSXp3bXRWXsaIJLa7r9n6ckPmFO1FFIlZgEpFMzuXrSF5avUPI5z6&_nc_ohc=p36txsjwylsQ7kNvgFbcwKF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QE0Eb4J06mhyYyyneBs1Wt3zdJgdl0laoqRrFUlHNVq_w&oe=67693B2F", 
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/467458792_2291562537903370_6790352247720552286_n.png?stp=dst-png_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeE9lfZ7Eu6lnIJTeCJlPWxsIjo13Xy3E28iOjXdfLcTb7j5OWGsGDTCaO550DRauqPXFr4FW7SM7P9M6F3CrDUM&_nc_ohc=8VrVkzLq1g4Q7kNvgGuXbaH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFF4P3cXY4Gspv0F89Eud85rD9bYzl4CZaTxwANe5ozTQ&oe=67695847",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/467463421_3790109611241110_2341605112037252448_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeG7YM9T8x3BzIgK1Ta6NpKR-_kmvF0RTbn7-Sa8XRFNudrV97lZ0r2ee7478w333toyCdBFEQVnbNUjCnevu0IM&_nc_ohc=6E79Gmk3qZUQ7kNvgFVMZzn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEhc8EMwiYn2m5RdKpZcbv7pWlEJeSlVyOBVyxgN3Obnw&oe=67695975",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/467463451_1976434276169010_905471856011149300_n.png?stp=dst-png_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHceLFO50TAyIlN1lSmxsZ-h8GprStP_tCHwamtK0_-0AuC_8797ASa5phLRETEF1jfme1I1VtA5XKA-SQYVKZP&_nc_ohc=2VdLP2UKkeEQ7kNvgEi__Ei&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGM2u8mzEvqVsiG5VTv2TYl8iPKWAAPh_5na5Tf7uM-vA&oe=676965D4",
                            "https://scontent.xx.fbcdn.net/v/t1.15752-9/467456699_8698371960248315_2734992654861902788_n.png?stp=dst-png_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeG4G_xu0592v073pcEPKMwrGVoFqYFcDtUZWgWpgVwO1dZGQ1Xwv42Bwy4wLl1VCmsTbZiDkSRO5O6eSuKPcGlH&_nc_ohc=SIfBg2kjUE0Q7kNvgECBWs-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEDndngqS9jtEI85EFpHDF8-PRG6630oHDbX9IYv8HJmw&oe=676967AC",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Sining Tala ${index + 1}`}
                                style={{
                                    width: "25%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer style={{ marginTop: "40px", textAlign: "center", padding: "10px", fontSize: "14px" }}>
                    © 2024 Sports and Culture Highlights. All rights reserved.
                </footer>

            </div>
        </>
    );
};

export default ViewSport;