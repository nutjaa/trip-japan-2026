export const tripOverview = {
  title: "Japan Autumn Leaves Trip 2026",
  dates: "7 - 15 พฤศจิกายน 2026 (9 วัน 8 คืน)",
  route: "กรุงเทพฯ (BKK) ➔ นาโกย่า (NGO) | โตเกียว (TYO) ➔ กรุงเทพฯ (BKK)",
  flightCost: "34,000 บาท/คน",
  totalBudget: "66,500 - 71,500 บาท/คน (รวมตั๋ว+ที่พัก+เดินทาง+กิน)",
  hotelBases: [
    { city: "Nagoya", nights: 1, date: "7 พ.ย." },
    { city: "Takayama", nights: 2, date: "8-9 พ.ย." },
    { city: "Matsumoto", nights: 1, date: "10 พ.ย." },
    { city: "Kawaguchiko", nights: 1, date: "11 พ.ย." },
    { city: "Tokyo", nights: 3, date: "12-14 พ.ย." }
  ]
};

export const daysData = [
  {
    day: 1,
    date: "เสาร์ 7 พฤศจิกายน 2026",
    city: "Nagoya (นาโกย่า)",
    theme: "เครื่องลงเช้า • ปราสาทมรดก • ข้าวหน้าปลาไหล • หมูทอดมิโสะ • แสงสี Oasis 21",
    stay: "Nagoya Station Area",
    hotelCandidates: [
      { 
        name: "Daiwa Roynet Hotel NAGOYA-SHINKANSENGUCHI", 
        note: "ตัวเลือกเต็งหนึ่ง! เดิน 3 นาทีฝั่ง Shinkansen ลากกระเป๋าง่ายที่สุด", 
        tag: "Top Candidate 🏆", 
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+NAGOYA-SHINKANSENGUCHI"
      },
      { 
        name: "Nagoya JR Gate Tower Hotel", 
        note: "อยู่บนตึก JR Gate Tower เชื่อมตรงสถานี", 
        tag: "Luxury 🌟", 
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nagoya+JR+Gate+Tower+Hotel"
      }
    ],
    transportPass: {
      name: "Donichi Eco Kippu (ドニチエコきっぷ)",
      price: "620 เยน",
      benefit: "พาสรถไฟใต้ดินวันหยุดสุดคุ้ม จ่ายแยก 1,080 เยน ซื้อพาสแค่ 620 เยน ประหยัด 460 เยน/คน แถมได้ส่วนลดปราสาทนาโกย่าอีก 100 เยน!"
    },
    hasOptions: true,
    timeline: [
      {
        time: "07:30 น.",
        title: "เครื่องลงสนามบิน Chubu Centrair (NGO)",
        desc: "ผ่านพิธีการ ตม. รับกระเป๋า กดเงินสดเยนที่ตู้ 7-Bank ATM",
        type: "transit"
      },
      {
        time: "08:45 - 09:30 น.",
        title: "นั่งรถไฟด่วน Meitetsu μ-SKY (First Class)",
        desc: "28 นาที วิ่งตรงรวดเดียวจอด 0 สถานีกลางทาง ลงสถานี Meitetsu Nagoya (ราคา 1,430 เยน จองที่นั่งเบาะนุ่ม มีที่วางกระเป๋าใบใหญ่)",
        type: "transit",
        link: "https://www.meitetsu.co.jp/eng/train/centrair/",
        images: [
          "/images/meitetsu_musky.png",
          "/images/meitetsu_musky_2.png"
        ]
      },
      {
        time: "09:30 - 10:00 น.",
        title: "ฝากกระเป๋าที่โรงแรม Daiwa Roynet",
        desc: "เดินจากสถานีเพียง 3 นาที ฝากกระเป๋าไว้ที่เคาน์เตอร์โรงแรมฟรี แล้วซื้อตั๋ว Donichi Eco Kippu 620 เยน",
        type: "hotel"
      },
      {
        time: "10:15 - 12:30 น.",
        title: "ปราสาทนาโกย่า & พระราชวังฮอนมารุ (Nagoya Castle)",
        desc: "นั่งใต้ดินสาย Higashiyama Line (Nagoya H08 ➔ Sakae H10 = 2 สถานี) ต่อสาย Meijo Line (Sakae M05 ➔ Nagoya-jo M07 = 2 สถานี) ชมปลาคาร์ฟเสือทองคำ พระราชวังไม้โบราณ และสวนใบไม้เปลี่ยนสีรอบคูเมือง",
        type: "spot",
        cost: "400 เยน (แสดงบัตร Donichi ลดจาก 500 เยน)",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nagoya+Castle",
        images: [
          "/images/nagoya_castle.png",
          "/images/nagoya_castle_2.jpg",
          "/images/nagoya_castle_3.jpg"
        ]
      },
      {
        time: "12:30 - 14:00 น.",
        title: "มื้อเที่ยง: ปลาไหล Hitsumabushi หรือ อุด้ง/คิชิเมน 🍱",
        desc: "เลือกทานตามความชอบของคุณแฟน (มีทั้งปลาไหลย่างและตัวเลือกอุด้ง/ก๋วยเตี๋ยวซุปร้อนๆ)",
        type: "food",
        foodOptions: [
          { 
            name: "Hitsumabushi Ino (สาขาตึก ESCA - ข้าวปลาไหลย่าง)", 
            desc: "สำหรับคนชอบปลาไหล! คิวน้อย หมุนเวียนไว ไม่ต้องยืนรอนาน อยู่ใต้ตึก ESCA ฝั่งโรงแรม", 
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Hitsumabushi+Ino+ESCA+Nagoya",
            images: ["/images/hitsumabushi.png"]
          },
          { 
            name: "Option A (ไม่ทานปลาไหล 💖): Yamamotoya Sohonke - Miso Nikomi Udon", 
            desc: "แนะนำที่สุด! อุด้งหม้อดินซอสมิโสะแดง เส้นเหนียวนุ่ม ซุปร้อนชุ่มคอ ทานง่าย อบอุ่นร่างกายมากๆ", 
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Yamamotoya+Sohonke+Nagoya"
          },
          { 
            name: "Option B (ไม่ทานปลาไหล 💖): Miya Kishimen - คิชิเมนก๋วยเตี๋ยวเส้นแบน", 
            desc: "ก๋วยเตี๋ยวบะหมี่เส้นแบนโบราณนาโกย่า ในน้ำซุปปลาแห้งใสๆ ท็อปปิ้งกุ้งเทมปุระกรอบ สบายท้อง ไม่หนักเกินไป", 
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Miya+Kishimen+Nagoya"
          }
        ]
      }
    ],
    planA: {
      title: "Plan A: ฟิตร่างกายพร้อม (เดินเที่ยวต่อ)",
      items: [
        {
          time: "14:30 - 16:30 น.",
          title: "วัดโอสึคันนอน & ตลาดช้อปปิ้งโบราณโอสึ (Osu Kannon)",
          desc: "ไหว้พระขอพรวัดพุทธสีแดงสด เดินชมถนนคนเดินสตรีทฟู้ดและของเล่น 1,200 ร้านค้า (เดิน 600m จากห้าง Matsuzakaya หรือนั่งใต้ดิน 2 สถานี)",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Osu+Kannon+Temple",
          images: ["/images/osu_kannon_temple.png"]
        },
        {
          time: "17:00 - 18:30 น.",
          title: "กลับโรงแรมเช็คอิน & พักผ่อน",
          desc: "นั่งใต้ดินจาก Osu Kannon (T08 ➔ Fushimi ➔ Nagoya H08 = 2 สถานี) รับกระเป๋า เช็คอิน อาบน้ำเปลี่ยนเสื้อผ้า"
        }
      ]
    },
    planB: {
      title: "Plan B: ถ้าแฟนเหนื่อย (แนะนำ! พักผ่อนชาร์จแบต 💖)",
      items: [
        {
          time: "14:30 - 18:00 น.",
          title: "ตัดตลาดโอสึออก! กลับไปนอนพักโรงแรมยาวๆ",
          desc: "ทานข้าวปลาไหลเสร็จ นั่งรถไฟกลับสถานี Nagoya เข้าเช็คอินโรงแรม Daiwa Roynet นอนพักผ่อนบนเตียงนุ่มๆ 3.5 ชั่วโมง แฟนไม่ล้า ขาไม่เละ เตรียมพร้อมลุยช่วงค่ำอย่างมีความสุข"
        }
      ]
    },
    eveningTimeline: [
      {
        time: "18:30 - 19:40 น.",
        title: "มื้อค่ำ: หมูทอดซอสมิโสะ Yabaton (สาขาห้าง LACHIC ย่าน Sakae) 🐷",
        desc: "นั่งใต้ดินสาย Higashiyama Line (Nagoya H08 ➔ Sakae H10 = 2 สถานี) ทาน Miso Katsu ร้านตำนาน Yabaton ห้าง LACHIC ชั้น 7 ร้านกว้างนั่งสบาย ห่างจาก Oasis 21 แค่เดิน 3 นาที",
        type: "food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Yabaton+LACHIC+Sakae",
        images: [
          "/images/yabaton_miso_katsu.png",
          "/images/yabaton_miso_katsu_2.jpg"
        ]
      },
      {
        time: "19:40 - 21:00 น.",
        title: "เดินย่อยอาหาร ชมวิวยามค่ำคืน Oasis 21 & MIRAI TOWER ✨",
        desc: "เดินลานกระจกลอยฟ้าทรงยานอวกาศ Oasis 21 ถ่ายรูปคู่หอคอยเปิดไฟสีส้มไอคอนิก MIRAI TOWER และแวะช้อปปิ้งดองกี้ Sakae",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Oasis+21+Nagoya",
        images: [
          "/images/oasis21_mirai_tower.png",
          "/images/oasis21_mirai_tower_2.jpg"
        ]
      },
      {
        time: "21:00 น.",
        title: "นั่งรถไฟกลับโรงแรมนอนสบายๆ",
        desc: "นั่งใต้ดินจาก Sakae (H10) ➔ Nagoya (H08) = 2 สถานี เดินเข้าโรงแรมพักผ่อนเต็มอิ่ม",
        type: "hotel"
      }
    ]
  },
  {
    day: 2,
    date: "อาทิตย์ 8 พฤศจิกายน 2026",
    city: "Takayama (ทาคายาม่า)",
    theme: "รถไฟชมวิวเขา • เมืองเก่าเอโดะ • ซูชิเนื้อฮิดะ A5 • ปิ้งย่างเนื้อฮิดะพรีเมี่ยม",
    stay: "Takayama Station Area",
    hotelCandidates: [
      { 
        name: "Tokyu Stay Hida Takayama Musubi no Yu", 
        note: "ติดสถานี Takayama เดิน 2 นาที มีออนเซ็นในตัว", 
        tag: "Top Choice ♨️", 
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Tokyu+Stay+Hida+Takayama"
      }
    ],
    timeline: [
      {
        time: "08:00 - 08:30 น.",
        title: "เช็คเอาต์ Nagoya เดินไปชานชาลา JR Nagoya",
        desc: "เดินจากโรงแรม 3 นาทีเข้าสถานี JR Nagoya ขึ้นสาย Takayama Main Line",
        type: "transit"
      },
      {
        time: "08:43 - 11:15 น.",
        title: "นั่งรถไฟด่วน JR Limited Express Hida 3 (Wide View)",
        desc: "2 ชั่วโมง 25 นาที (แนะนำจองที่นั่งฝั่งขวา Seat D ชมวิวแม่น้ำ Hida River และหุบเขาใบไม้เปลี่ยนสี!)",
        type: "transit",
        cost: "6,030 เยน (Reserved Seat)",
        link: "https://railway.jr-central.co.jp/",
        images: [
          "/images/jr_hida_train_view.png",
          "/images/jr_hida_train_view_2.jpg"
        ]
      },
      {
        time: "11:15 - 11:45 น.",
        title: "ถึงสถานี JR Takayama & ฝากกระเป๋า",
        desc: "ฝากสัมภาระที่โรงแรมใกล้สถานี แล้วเตรียมออกเดินเที่ยวตัวเบา",
        type: "hotel",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Takayama+Station"
      },
      {
        time: "11:45 - 14:30 น.",
        title: "เดินเที่ยว ย่านเมืองเก่าซันมาชิ ซูจิ & ตะลุยชิมสตรีทฟู้ด ⛩️",
        desc: "เดินชมถนนคนเดินอาคารไม้โบราณเอโดะ (Kamisannomachi)",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sanmachi+Suji+Takayama",
        images: [
          "/images/takayama_sanmachi.png",
          "/images/takayama_sanmachi_2.webp"
        ],
        foodOptions: [
          { 
            name: "ซูชิเนื้อฮิดะ A5 บนข้าวเกรียบ (ร้าน Kotteushi)", 
            desc: "ห้ามพลาด! เนื้อฮิดะพ่นไฟฉ่ำๆ วางบนข้าวเกรียบเอเบะ ชิ้นละ 700-1,000 เยน ทานได้ทั้งชิ้น!", 
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Kotteushi+Takayama",
            images: ["/images/hida_beef_sushi.png"]
          }
        ]
      },
      {
        time: "14:30 - 16:30 น.",
        title: "ถ่ายรูปสะพานแดงนากะบาชิ & จวนผู้ว่าโบราณ Takayama Jinya 🍁",
        desc: "สะพานสีแดงข้ามแม่น้ำ Miyagawa ถ่ายรูปคู่ใบไม้แดงมุมมหาชน + ชมจวนผู้ว่าโบราณยุคเอโดะแห่งเดียวในญี่ปุ่น (ค่าเข้า 440 เยน)",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nakabashi+Bridge+Takayama",
        images: ["/images/nakabashi_bridge_takayama.png"]
      },
      {
        time: "17:00 - 18:30 น.",
        title: "เช็คอินโรงแรม & แช่ออนเซ็นผ่อนคลาย ♨️",
        desc: "พักผ่อนจากการเดินทาง แช่น้ำแร่ออนเซ็นผ่อนคลายกล้ามเนื้อ",
        type: "hotel"
      },
      {
        time: "18:30 น. เป็นต้นไป",
        title: "จัดเต็มมื้อค่ำ: ปิ้งย่างเนื้อฮิดะ A5 (Hida Beef Feast) 🥩",
        desc: "ทานสุดยอดเนื้อวากิว 1 ใน 3 ของญี่ปุ่น นุ่มละลายในปาก",
        type: "food",
        foodOptions: [
          { 
            name: "Ajikura Tengoku (味蔵天国)", 
            desc: "แนะนำอันดับ 1! ร้านสหกรณ์การเกษตร ข้างสถานี Takayama เนื้อ A5 เกรดพรีเมี่ยมราคาคุ้มค่าที่สุด", 
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Ajikura+Tengoku+Takayama",
            images: ["/images/ajikura_tengoku_yakiniku.png"]
          }
        ]
      }
    ]
  },
  {
    day: 3,
    date: "จันทร์ 9 พฤศจิกายน 2026",
    city: "Shirakawa-go (ชิราคาวาโกะ)",
    theme: "Day Trip ตัวเบา • หมู่บ้านมรดกโลก • บ้านทรงกัสโชซึคุริ • จุดชมวิวมุมเทพ",
    stay: "Takayama (นอนคืนที่ 2)",
    timeline: [
      {
        time: "09:00 - 10:00 น.",
        title: "นั่ง Nohi Bus ไป Shirakawa-go",
        desc: "นั่งรถบัสตรง 50 นาที ตัวเบาไม่ต้องลากกระเป๋าเพราะฝากไว้ที่โรงแรม Takayama!",
        type: "transit",
        cost: "2,600 เยน/เที่ยว",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shirakawa-go",
        images: ["/images/nohi_bus_view.png"]
      },
      {
        time: "10:00 - 14:30 น.",
        title: "เดินเที่ยวหมู่บ้านมรดกโลก Shirakawa-go 🛖🍁",
        desc: "ชมบ้านทรงหลังคามุงหญ้ากัสโชซึคุริ ชมใบไม้เปลี่ยนสีทั่วหมู่บ้าน นั่ง shuttle bus ขึ้นจุดชมวิว Shiroyama Viewpoint ถ่ายรูปมุมมหาชนในเทพนิยาย",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Shiroyama+Viewpoint+Shirakawago",
        images: ["/images/shirakawago_village.png"]
      },
      {
        time: "15:00 - 16:00 น.",
        title: "นั่ง Nohi Bus กลับเมือง Takayama",
        desc: "เดินทางกลับมาพักผ่อนที่เมือง Takayama",
        type: "transit",
        images: ["/images/nohi_bus_view.png"]
      },
      {
        time: "17:00 น. เป็นต้นไป",
        title: "เดินเล่นริมแม่น้ำ Miyagawa • แช่ออนเซ็น • มื้อค่ำราเมนทาคายาม่า",
        desc: "ผ่อนคลายสบายๆ ทานทาคายาม่าโชยุราเมนซุปร้อนๆ และแช่ออนเซ็นที่โรงแรม",
        type: "food",
        images: ["/images/takayama_ramen.png"]
      }
    ]
  },
  {
    day: 4,
    date: "อังคาร 10 พฤศจิกายน 2026",
    city: "Matsumoto (มัตสึโมโต้)",
    theme: "ข้ามเทือกเขาอัลป์ • ปราสาทมัตสึโมโต้สีดำมรดกโลก • ถนนสายกบ • โซบะชินชู",
    stay: "Matsumoto Station Area",
    timeline: [
      {
        time: "09:00 - 11:00 น.",
        title: "นั่ง Nohi Bus / Alpico Bus ข้ามเทือกเขา Japan Alps",
        desc: "ประมาณ 2 ชั่วโมง วิวสวยงามมากผ่านแถบ Hirayu Onsen ข้ามเทือกเขาจาก Takayama ➔ Matsumoto",
        type: "transit",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Matsumoto+Station",
        images: ["/images/nohi_bus_view.png"]
      },
      {
        time: "11:30 - 13:00 น.",
        title: "เช็กอินฝากกระเป๋า & มื้อเที่ยงโซบะ Shinshu Soba 🍜",
        desc: "ทานโซบะบัควีททำสดขึ้นชื่อของจังหวัดนาการ์โน่",
        type: "food",
        images: ["/images/shinshu_soba.png"]
      },
      {
        time: "13:30 - 16:30 น.",
        title: "ปราสาทมัตสึโมโต้ (Matsumoto Castle / ปราสาทอีกา) 🏯",
        desc: "ปราสาทไม้โบราณสีดำ 1 ใน 5 สมบัติชาติของญี่ปุ่น ถ่ายรูปคู่ใบไม้แดงรอบคูเมือง และเดินเล่นถนนสายกบ Nawate-dori",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Matsumoto+Castle",
        images: ["/images/matsumoto_castle.png"]
      },
      {
        time: "18:00 น. เป็นต้นไป",
        title: "ชมปราสาทเปิดไฟยามค่ำคืน (Light-up) & มื้อค่ำสไตล์มัตสึโมโต้",
        desc: "ถ่ายรูปปราสาทเปิดไฟสีทองเงาสะท้อนน้ำ และทานมื้อค่ำทงคัตสึไก่ซันโซคุยากิ (Sanzokuyaki)",
        type: "spot",
        images: ["/images/matsumoto_castle.png"]
      }
    ]
  },
  {
    day: 5,
    date: "พุธ 11 พฤศจิกายน 2026",
    city: "Kawaguchiko (คาวาคูจิโกะ & ฟูจิ)",
    theme: "นั่งรถไฟชมวิวฟูจิ • อุโมงค์ใบไม้แดง Momiji Corridor • นอนเรียวกังออนเซ็น • บะหมี่โฮโต",
    stay: "Kawaguchiko Ryokan & Onsen",
    timeline: [
      {
        time: "08:30 - 11:15 น.",
        title: "เดินทางด้วยรถไฟ: JR Limited Express Azusa ➔ Fujikyu Fujisan View Express 🚆",
        desc: "นั่ง JR Azusa จาก Matsumoto ลงสถานี Otsuki (~1.40 ชม.) ต่อรถไฟสายภูเขา Fujikyu Fujisan View Express เข้าสถานี Kawaguchiko (~45 นาที) วิวภูเขาไฟฟูจิตลอดสองข้างทาง!",
        type: "transit",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Station",
        images: ["/images/fujikyu_railway_train.png"]
      },
      {
        time: "11:30 - 13:00 น.",
        title: "มื้อเที่ยง: บะหมี่หม้อเหล็กร้อน 'โฮโต (Houtou)' 🍲",
        desc: "อาหารท้องถิ่นขึ้นชื่อประจำฟูจิ บะหมี่เส้นใหญ่ในซุปมิโสะฟักทองร้อนๆ ร้าน Houtou Fudou หน้าสถานี",
        type: "food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Houtou+Fudou+Kawaguchiko",
        images: ["/images/houtou_noodles_fuji.png"]
      },
      {
        time: "13:30 - 16:30 น.",
        title: "อุโมงค์ใบไม้เปลี่ยนสี (Momiji Corridor) & สวนโออิชิ 🍁🗻",
        desc: "นั่ง Red Line Bus เที่ยวรอบทะเลสาบ: Bus Stop 17 (อุโมงค์ใบไม้แดงเปลี่ยนสีคู่ฟูจิ พีคสุดของปี!) + Bus Stop 20 (สวน Oishi Park มุมฟูจิกว้าง)",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Momiji+Corridor+Kawaguchiko",
        images: ["/images/fuji_momiji_corridor.png"]
      },
      {
        time: "17:00 น. เป็นต้นไป",
        title: "เช็คอินเรียวกังวิวฟูจิ • อาหารไคเซกิ • แช่ออนเซ็น ♨️",
        desc: "สัมผัสประสบการณ์นอนเรียวกังญี่ปุ่น ทานอาหารค่ำ Kaiseki และแช่ออนเซ็นมองวิวฟูจิ (ชมไฟ Light-up อุโมงค์ใบไม้แดงตอนค่ำ)",
        type: "hotel"
      }
    ]
  },
  {
    day: 6,
    date: "พฤหัสบดี 12 พฤศจิกายน 2026",
    city: "Kawaguchiko ➔ Tokyo (ชินจูกุ)",
    theme: "สโลว์ไลฟ์ฟูจิจนถึงบ่าย • นั่งกระเช้า Ropeway • บัสเข้าโตเกียวช่วงเย็น • แสงสี Shinjuku Night",
    stay: "Tokyo (Shinjuku / Ueno Area)",
    timeline: [
      {
        time: "09:00 - 11:00 น.",
        title: "กระเช้าลอยฟ้า Mt. Fuji Panorama Ropeway 🚠🗻",
        desc: "เช็กเอาต์ฝากกระเป๋า นั่งกระเช้าขึ้นยอดเขา Tenjo ชมวิวภูเขาไฟฟูจิและทะเลสาบคาวาคูจิโกะมุมกว้าง 360 องศา",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mt.+Fuji+Panorama+Ropeway",
        images: ["/images/fuji_ropeway_view.png"]
      },
      {
        time: "11:30 - 15:00 น.",
        title: "ทานมื้อเที่ยงริมทะเลสาบ & จิบกาแฟคาเฟ่วิวฟูจิ ☕",
        desc: "พักผ่อนสบายๆ ไม่ต้องรีบร้อน ทานสเต็ก/พาสต้าอร่อยๆ และจิบกาแฟถ่ายรูปใบไม้เปลี่ยนสีสะท้อนน้ำ",
        type: "food"
      },
      {
        time: "15:30 - 17:30 น.",
        title: "นั่ง Highway Bus ตรงเข้ากรุงโตเกียว (Shinjuku)",
        desc: "1 ชั่วโมง 45 นาที นั่งรถบัสสบายๆ จากสถานี Kawaguchiko ถึง Shinjuku Expressway Bus Terminal",
        type: "transit",
        images: ["/images/nohi_bus_view.png"]
      },
      {
        time: "18:00 น.",
        title: "ถึงโตเกียว & เช็คอินโรงแรม",
        desc: "เข้าเช็คอินโรงแรมฝากสัมภาระ (ย่าน Shinjuku หรือ Ueno)",
        type: "hotel"
      },
      {
        time: "18:30 - 21:30 น.",
        title: "ตะลุยแสงสียามค่ำคืนย่าน Shinjuku & Omoide Yokocho 🏮🥩",
        desc: "ถ่ายรูปแมว 3D ช้อปปิ้ง ทานปิ้งย่างวากิวพรีเมี่ยม และเดินตรอกโคมแดงโบราณ Omoide Yokocho",
        type: "food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku",
        images: ["/images/omoide_yokocho_shinjuku.png"]
      }
    ]
  },
  {
    day: 7,
    date: "ศุกร์ 13 พฤศจิกายน 2026",
    city: "Tokyo East (โตเกียว - แปะก๊วย / อาซากุสะ / สกายทรี)",
    theme: "ถนนแปะก๊วยสีเหลืองทอง • วัดเซ็นโซจิโคมแดง • Tokyo Skytree • ตลาด Ameyoko",
    stay: "Tokyo (นอนคืนที่ 2)",
    timeline: [
      {
        time: "09:00 - 11:00 น.",
        title: "ถนนต้นแปะก๊วย Meiji Jingu Gaien 🍂",
        desc: "ชมอุโมงค์ต้นแปะก๊วยสีเหลืองทองแนวยาว ช่วงพีคสวยที่สุดในโตเกียว!",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Meiji+Jingu+Gaien+Ginkgo+Avenue",
        images: ["/images/meiji_ginkgo_avenue.png"]
      },
      {
        time: "11:30 - 14:30 น.",
        title: "วัดเซ็นโซจิ (วัดอาซากุสะ) & มื้อเที่ยงข้าวหน้าเทมปุระ ⛩️",
        desc: "ไหว้พระขอพร ถ่ายรูปโคมแดงยักษ์ ชิมขนมตลอดถนน Nakamise ทาน Tendon",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sensoji+Temple+Asakusa",
        images: ["/images/sensoji_asakusa_temple.png"]
      },
      {
        time: "15:00 - 17:30 น.",
        title: "ริมแม่น้ำสุมิดะ • Tokyo Skytree • ช้อปปิ้งตลาด Ameyoko Ueno",
        desc: "ถ่ายรูป Skytree ริมแม่น้ำ เดินซื้อของฝากขนมและรองเท้าตลาดโบราณ Ameyoko",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ameyoko+Shopping+Street",
        images: ["/images/tokyo_skytree_sumida.png"]
      },
      {
        time: "18:30 น. เป็นต้นไป",
        title: "ตะลุยย่าน Akihabara หรือ มื้อค่ำชาบู/สุกี้ยากี้เนื้อวากิว 🍲",
        desc: "ช้อปปิ้งฟิกเกอร์/เกม และปิดท้ายวันด้วยชาบูวากิวพรีเมี่ยม",
        type: "food"
      }
    ]
  },
  {
    day: 8,
    date: "เสาร์ 14 พฤศจิกายน 2026",
    city: "Tokyo Central (โตเกียว - ฮาราจูกุ / รปปงงิ / โตเกียวทาวเวอร์)",
    theme: "ฮาราจูกุ • โอโมเตะซันโด • เนื้อทอด Gyukatsu • โตเกียวทาวเวอร์ยามเปิดไฟ",
    stay: "Tokyo (นอนคืนที่ 3)",
    timeline: [
      {
        time: "10:00 - 13:00 น.",
        title: "Harajuku Takeshita Street & Omotesando Cat Street 🛍️",
        desc: "เดินเล่นย่านแฟชั่น ชิมเครปญี่ปุ่น เดินถนนสตรีทชิค Omotesando",
        type: "spot",
        images: ["/images/harajuku_takeshita.png"]
      },
      {
        time: "13:00 - 14:30 น.",
        title: "มื้อเที่ยง: เนื้อวัวทอด Gyukatsu Motomura 🥩",
        desc: "เนื้อวัวทอดแป้งกรอบข้างนอก ข้างในเนื้อฉ่ำ ย่างบนเตาหินส่วนตัว",
        type: "food",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gyukatsu+Motomura",
        images: ["/images/gyukatsu_motomura.png"]
      },
      {
        time: "15:00 - 18:00 น.",
        title: "Roppongi Hills & สวนโมริ (Mori Garden) 🍁",
        desc: "ชมวิวใบไม้เปลี่ยนสีในสวนญี่ปุ่นสไตล์โมเดิร์นกลางเมือง",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Roppongi+Hills"
      },
      {
        time: "18:30 - 21:30 น.",
        title: "จุดชมวิว Tokyo Tower ยามเปิดไฟสีส้มไอคอนิก 🗼",
        desc: "ถ่ายรูปมุมมหาชนตรง Azabudai Hills หรือสวน Shiba Park ทานมื้อค่ำปิดทริป",
        type: "spot",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Tokyo+Tower",
        images: ["/images/tokyo_tower_night.png"]
      }
    ]
  },
  {
    day: 9,
    date: "อาทิตย์ 15 พฤศจิกายน 2026",
    city: "Tokyo ➔ กรุงเทพฯ (วันเดินทางกลับ)",
    theme: "ช้อปปิ้งส่งท้าย • สนามบิน Duty Free • เดินทางกลับโดยสวัสดิภาพ",
    stay: "เดินทางกลับกรุงเทพฯ",
    timeline: [
      {
        time: "09:00 - 12:00 น.",
        title: "เช็กเอาต์ฝากกระเป๋า & ช้อปปิ้งเก็บตกของฝาก",
        desc: "ซื้อของฝากย่านใกล้โรงแรม ทานมื้อเที่ยงส่งท้าย",
        type: "hotel"
      },
      {
        time: "13:00 - 14:00 น.",
        title: "เดินทางไปสนามบิน (Narita / Haneda)",
        desc: "Narita: นั่ง Keisei Skyliner (41 นาทีจาก Ueno) | Haneda: นั่ง Monorail (25 นาที)",
        type: "transit"
      },
      {
        time: "14:30 น.",
        title: "ถึงสนามบิน เช็กอิน โหลดกระเป๋า & ช้อปปิ้ง Duty Free",
        desc: "ซื้อขนม Royce, Shiroi Koibito, Tokyo Banana ส่งท้าย",
        type: "transit"
      },
      {
        time: "17:30 - 19:30 น.",
        title: "ขึ้นเครื่องเดินทางกลับกรุงเทพฯ (BKK) ✈️",
        desc: "บินกลับกรุงเทพฯ โดยสวัสดิภาพ ถึงไทยช่วงดึก",
        type: "transit"
      }
    ]
  }
];
