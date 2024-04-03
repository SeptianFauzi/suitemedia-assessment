import React from "react";

function pindahan() {
  return (
    <div>
      <main className="px-[130px]">
        <section className="mt-[60px]">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-[2px]">
              <p className="text-base font-medium text-black">Whats new?</p>
              <p className=" text-2xl text-dark-blue-00 font-bold">
                Take A Look At Some Our Pets
              </p>
            </div>
            <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-sm rounded-[57px] py-3 px-7  font-medium">
              View More
              <img src="/images/arrow-right-icon.svg" alt="" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4 mt-10">
              {Array.of(1, 2, 3, 4, 5, 6, 7, 8).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[280px] p-2 rounded-xl bg-white shadow-sm gap-2 flex flex-col"
                  >
                    <img src="/images/puppy-1.png" alt="" />
                    <div className="p-2">
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-bold text-neural-color-100">
                          MO231 - Pomeranian White
                        </p>
                        <div className="flex gap-1">
                          <div className="flex gap-[6px] items-center">
                            <p className="font-medium text-xs text-neural-color-60">
                              Gene:{" "}
                            </p>
                            <p className="font-bold text-xs text-neural-color-60">
                              Male
                            </p>
                          </div>
                          <p className="text-neural-color-60 size-4 flex items-center justify-center">
                            ·
                          </p>
                          <div className="flex gap-[6px] items-center">
                            <p className="font-medium text-xs text-neural-color-60">
                              Age:{" "}
                            </p>
                            <p className="font-bold text-xs text-neural-color-60">
                              02 Months
                            </p>
                          </div>
                        </div>
                        <p className="font-bold text-sm text-neural-color-100">
                          6.900.000 VND
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mt-[60px]">
          <div className="h-[378px] rounded-[20px] bg-dark-blue-00 -z-10">
            <img
              className="absolute -z-2 object-cover rounded-[20px]"
              src="/images/banner-2.svg"
              alt=""
            />
            <div className="flex z-10 justify-around items-center">
              <img
                className="relative z-20 "
                src="/images/adult-girl.png"
                alt=""
              />
              <div className="max-w-[490px] items-end flex flex-col relative text-right">
                <h1 className="text-[52px] leading-[68px] text-dark-blue-80 font-extrabold mt-16 z-10">
                  One More Friend
                </h1>
                <h2 className=" text-4xl font-bold leading-[60px] text-dark-blue-00">
                  Thousands more fun!
                </h2>
                <p className="max-w-[394px] text-xs text-neural-color-80 font-medium mt-2">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
                <div className="flex mt-10 gap-7">
                  <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
                    View Intro
                    <img src="/images/play-button-icon.png" alt="" />
                  </button>
                  <button className="flex items-center gap-1 border border-dark-blue-00 text-neural-color-00 font-semi text-base rounded-[57px] py-[14px] px-7 bg-dark-blue-00 font-medium">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" mt-32">
          <div className="flex justify-between items-end">
            <div className="flex items-end gap-2">
              <p className="text-base font-medium text-black">
                Proud to be part of
              </p>
              <p className=" text-2xl text-dark-blue-00 font-bold">
                Pet Sellers
              </p>
            </div>
            <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-sm rounded-[57px] py-3 px-7  font-medium">
              View all our sellers
              <img src="/images/arrow-right-icon.svg" alt="" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-7 mt-4">
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-1.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-2.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-3.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-4.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-5.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-6.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="/images/pet-sellers-7.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="mt-10 ">
          <div className="h-[378px] rounded-[20px] bg-[#FFB775] -z-10">
            <img
              className="absolute -z-2 object-cover rounded-[20px]"
              src="/images/banner-3.svg"
              alt=""
            />
            <div className="flex z-10 justify-around items-center">
              <div className="max-w-[490px] items-start flex flex-col relative pl-8">
                <div className="flex items-center gap-4">
                  <h1 className="text-[52px] leading-[68px] text-dark-blue-80 font-extrabold z-10">
                    Adoption
                  </h1>
                  <img src="/images/dog-foot.svg" alt="" />
                </div>
                <h2 className="text-4xl font-bold leading-[54px] text-dark-blue-00">
                  We need help. so do they.
                </h2>
                <p className="max-w-[394px] text-xs text-neural-color-80 font-medium mt-2">
                  Adopt a pet and give it a home, it will be love you back \n
                  unconditionally.
                </p>
                <div className="flex mt-10 gap-7">
                  <button className="flex items-center gap-1 border border-dark-blue-00 text-neural-color-00 font-semi text-base rounded-[57px] py-[14px] px-7 bg-dark-blue-00 font-medium">
                    Explore Now
                  </button>
                  <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
                    View Intro
                    <img src="/images/play-button-icon.png" alt="" />
                  </button>
                </div>
              </div>
              <img
                className="relative z-20"
                src="/images/human-dog.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="mt-[60px]">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-[2px]">
              <p className="text-base font-medium text-black">
                You already know?
              </p>
              <p className="text-2xl text-dark-blue-00 font-bold">
                Useful pet knowledge
              </p>
            </div>
            <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-sm rounded-[57px] py-3 px-7  font-medium">
              View More
              <img src="/images/arrow-right-icon.svg" alt="" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 mt-10">
              {Array.of(1, 2, 3).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[380px] h-[424px] p-2 rounded-xl bg-white shadow-sm gap-2 flex flex-col"
                  >
                    <img src="/images/dog-running.png" alt="" />
                    <div className="p-2">
                      <div className="flex flex-col gap-[10px]">
                        <div>
                          <button className=" bg-blue-sea py-1 px-[10px] text-[10px] leading-[16px]  text-neural-color-00 rounded-[28px]">
                            Pet knowledge
                          </button>
                        </div>
                        <div className="flex flex-col gap-[6px] overflow-auto h-[114px]">
                          <p className=" text-neural-color-100 text-base font-bold">
                            What is a Pomeranian? How to Identify Pomeranian
                            Dogs
                          </p>
                          <p className="text-sm font-normal text-neural-color-80">
                            The Pomeranian, also known as the Pomeranian (Pom
                            dog), is always in the top of the cutest pets. Not
                            only that, the small, lovely, smart, friendly, and
                            skillful circus dog breed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer
        className="mt-[60px] flex justify-center items-center h-[440px] rounded-t-[40px] px-[130px]"
        style={{
          background:
            "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        }}
      >
        <div>
          <div className="flex flex-col gap-10 border-b border-neural-color-20 pb-10">
            <div className="flex gap-5 bg-dark-blue-00 p-8 rounded-2xl">
              <p className=" text-2xl text-neural-color-00 font-bold">
                Register now so you don&apos;t miss our programs
              </p>
              <div className="p-3 rounded-xl bg-white gap-3 flex w-min justify-between items-center">
                <input
                  type="text"
                  className="w-[508px] h-min py-[14px] px-7 text-neural-color-40 text-[14px] rounded-lg border border-neural-color-40 leading-[0px]"
                  placeholder="Enter your email"
                />
                <button className="py-[14px] text-nowrap px-7 bg-dark-blue-00 text-base rounded-lg font-medium text-neural-color-00 ">
                  Subcribe Now
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <ul className="flex justify-between gap-[60px]">
                  <li>
                    <a
                      href=""
                      aria-label="Home"
                      className="text-base text-neural-color-100 font-medium"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      aria-label="Category"
                      className="text-base text-neural-color-100 font-medium"
                    >
                      Category
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      aria-label="About"
                      className="text-base text-neural-color-100 font-medium"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      aria-label="Contact"
                      className="text-base text-neural-color-100 font-medium"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex gap-10">
                <a href="" aria-label="Facebook">
                  <img src="/images/facebook.svg" alt="" />
                </a>
                <a href="" aria-label="Twitter">
                  <img src="/images/twitter.svg" alt="" />
                </a>
                <a href="" aria-label="Instagram">
                  <img src="/images/instagram.svg" alt="" />
                </a>
                <a href="" aria-label="Youtube">
                  <img src="/images/youtube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <p className="text-neural-color-60 text-sm font-medium">
              © 2022 Monito. All rights reserved.
            </p>
            <img src="/images/monito-logo.svg" alt="" />
            <ul className="flex justify-between gap-16">
              <li>
                <a
                  href=""
                  aria-label="Terms of Service"
                  className=" text-neural-color-60 text-sm font-medium"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  aria-label="Privacy Policy"
                  href=""
                  className="text-neural-color-60 text-sm font-medium"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default pindahan;
