import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#00fa26] min-h-screen flex flex-col items-center">
      <Image
        src="https://ax-47.github.io/nuclear.github.io/nuclear.gif"
        alt="nuclear"
        width={1980}
        height={814}
        unoptimized
        className="w-full"
      />

      <div className="w-full  p-[100px]">
        <h1 className="text-center text-5xl font-bold uppercase text-black tracking-widest border-b-4 border-black pb-4 mb-10">
          การแพทย์
        </h1>

        <div className="flex flex-col md:flex-row gap-10 ">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-black mb-4">ประโยชน์</h2>
            <p className="text-lg leading-relaxed">
              ใช้รังสีเอกซ์ในการถ่ายภาพโครงสร้างภายในร่างกาย ช่วยให้แพทย์สามารถตรวจพบกระดูกหัก หรือเนื้องอกได้อย่างแม่นยำ
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
              <li>การตรวจด้วยไอโซโทป: นำสารกัมมันตรังสีเข้าสู่ร่างกายเพื่อติดตามการทำงานของอวัยวะ</li>
              <li>การตรวจ PET Scan: ใช้ในการตรวจสอบการทำงานของเซลล์ในร่างกาย</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-10 mb-4">โทษและผลเสีย</h2>
            <p className="text-lg leading-relaxed">
              การได้รับรังสีในปริมาณที่มากเกินไปอาจเพิ่มความเสี่ยงในการเกิดมะเร็งได้
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
              <li>ความผิดปกติทางพันธุกรรมจากรังสี</li>
              <li>ผลกระทบต่อทารกในครรภ์</li>
              <li>ผลกระทบระยะยาว เช่น ภาวะมีบุตรยาก</li>
            </ul>
          </div>

          <Image src="https://ax-47.github.io/nuclear.github.io/t-25.png" alt="nuclear" width={500} height={500}  />
        </div>
      </div>

      <div className="w-full  p-[100px] bg-black shadow-lg">
        <h1 className="text-center text-5xl font-bold uppercase text-[#00fa26] tracking-widest border-b-4 border-[#00fa26] pb-4 mb-10">
          เกษตรกรรม
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          <Image src="https://ax-47.github.io/nuclear.github.io/sun.png" alt="nuclear" width={500} height={500} />

          <div className="flex-1 py-[100px] w-1/2">
            <h2 className="text-3xl font-bold text-[#00fa26] mb-4">ประโยชน์</h2>
            <p className="text-lg leading-relaxed text-[#fffeff]">
              ใช้รังสีแกมมาช่วยยืดอายุการเก็บของอาหาร ชะลอการสุกของผลไม้ และกำจัดเชื้อโรค
            </p>

            <h2 className="text-3xl font-bold text-[#00fa26] mt-10 mb-4">โทษและผลเสีย</h2>
            <p className="text-lg leading-relaxed text-[#fffeff]">
              การปนเปื้อนของดินและน้ำจากสารกัมมันตรังสี อาจส่งผลกระทบต่อการเกษตรและห่วงโซ่อาหาร
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full p-10 bg-[#fffeff] px-[100px] shadow-lg z-[1]">
        <div className="absolute z-[-1] left-1/2 transform -translate-x-1/2">
          <Image src="https://ax-47.github.io/nuclear.github.io/core.webp" alt="nuclear" width={500} height={500} />
        </div>
        <div className="flex flex-row">
          <div className=" p-10 bg-[#00fa26] shadow-lg w-1/2 justify-start self-start">
            <h1 className="text-center text-5xl font-bold uppercase text-black tracking-widest border-b-4 border-black pb-4 mb-10">
              อุตสาหกรรม
            </h1>
            <div className="flex flex-col md:flex-row gap-10 ">
              <div className=" ">
                <h2 className="text-3xl font-bold text-black mb-4">ประโยชน์</h2>
                <p className="text-lg leading-relaxed">
                  พลังงานนิวเคลียร์สามารถผลิตไฟฟ้าได้มากจากเชื้อเพลิงน้อย, ใช้ฆ่าเชื้อโรคในอาหารและวัสดุทางการแพทย์, พัฒนาวัสดุใหม่ๆ เช่น พลาสติกแข็งแรง, และใช้ในการสำรวจและผลิตปิโตรเลียม
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
                  <li>การตรวจสอบกระบวนการผลิต เช่น กระดาษ พลาสติก โลหะ</li>
                  <li>การฆ่าเชื้อโรคในผลิตภัณฑ์ต่างๆ</li>
                  <li>การพัฒนาผลิตภัณฑ์ใหม่ๆ เช่น พลาสติกแข็งแรงและวัสดุอวกาศ</li>
                  <li>การสำรวจแหล่งปิโตรเลียมและเพิ่มประสิทธิภาพการผลิต</li>
                </ul>

                <h2 className="text-3xl font-bold text-black mt-10 mb-4">โทษและผลเสีย</h2>
                <p className="text-lg leading-relaxed">ความเสี่ยงจากอุบัติเหตุ:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
                  <li>การรั่วไหลของสารกัมมันตรังสีทำให้เกิดการปนเปื้อนในสิ่งแวดล้อม</li>
                </ul>

                <p className="text-lg leading-relaxed">การจัดการขยะนิวเคลียร์:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
                  <li>กากนิวเคลียร์ต้องมีการจัดการอย่างปลอดภัย</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className=" p-10 bg-[#00fa26] shadow-lg w-1/2 justify-end self-start mt-[1000px]">
          <h1 className="text-center text-5xl font-bold uppercase text-black tracking-widest border-b-4 border-black pb-4 mb-10">
            วิศวกรรม
          </h1>

          <div className="flex flex-col md:flex-row gap-10">

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black mb-4">ประโยชน์</h2>
              <p className="text-lg leading-relaxed">
                • พัฒนาวัสดุใหม่ เช่น วัสดุทนรังสี และวัสดุที่แข็งแรงแต่น้ำหนักเบา<br />
                • ตรวจสอบรอยแตกร้าวและวัดความหนาของวัสดุด้วยรังสีเอกซ์หรือไอโซโทป<br />
                • วิเคราะห์องค์ประกอบทางเคมีด้วยเทคนิค Neutron Activation Analysis
              </p>

              <h2 className="text-3xl font-bold text-black mt-10 mb-4">โทษและผลเสีย</h2>
              <p className="text-lg leading-relaxed">
                • การออกแบบซับซ้อน ต้องใช้วิศวกรรมเฉพาะทางและมีความเสี่ยงจากความผิดพลาด<br />
                • ระบบระบายความร้อนของโรงไฟฟ้านิวเคลียร์ต้องมีประสิทธิภาพสูงเพื่อป้องกันอุบัติเหตุ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  p-10 py-[100px] bg-black shadow-lg z-[3] px-[100px] ">
        <h1 className="text-center text-5xl font-bold uppercase text-[#00fa26] tracking-widest border-b-4 border-[#00fa26] pb-4 mb-10">
          พลังงาน
        </h1>

        <div className="flex flex-row gap-[200px]">
          <Image src="https://ax-47.github.io/nuclear.github.io/sun.png" alt="nuclear" width={500} height={500} className="justify-start" />
          <div className="flex-1 justify-end">
            <div className=" w-3/4 ">

              <h2 className="text-3xl font-bold text-[#00fa26] mb-4">ประโยชน์</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                • ผลิตไฟฟ้าปริมาณมากจากเชื้อเพลิงน้อย<br />
                • ลดการปล่อยก๊าซเรือนกระจก ช่วยลดภาวะโลกร้อน<br />
                • เสถียรภาพสูง ไม่ได้รับผลกระทบจากสภาพอากาศ
              </p>

              <h2 className="text-3xl font-bold text-[#00fa26] mt-10 mb-4">โทษและผลเสีย</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                • ความเสี่ยงจากอุบัติเหตุและการรั่วไหลของกัมมันตรังสี<br />
                • ปัญหาขยะนิวเคลียร์ที่ต้องกำจัดอย่างปลอดภัย<br />
                • ผลกระทบต่อสิ่งแวดล้อมและการใช้ทรัพยากรน้ำจำนวนมาก<br />
                • ความเสี่ยงในการแพร่กระจายอาวุธนิวเคลียร์<br />
                • ต้นทุนการก่อสร้างและบำรุงรักษาสูง<br />
                • ผลกระทบทางสังคมและการต่อต้านจากประชาชน
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

