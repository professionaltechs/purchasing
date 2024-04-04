import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        role="status"
        className="flex items-center justify-center h-96 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 w-11/12 max-w-6xl mx-auto"
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="px-3 lg:px-10">
        <h1 className="text-3xl text-center mt-16 font-semibold lg:text-4xl lg:mt-20">
          Lorem Ipsum
        </h1>
        <div className="text-[#120059] max-w-[1200px] mx-auto mt-8 text-center flex flex-col gap-6 leading-5 lg:mt-12 lg:leading-6 lg:gap-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
            purus, venenatis eget lacus rutrum, lobortis semper turpis. Nam
            consectetur odio et laoreet ultrices. Donec vestibulum arcu id ante
            posuere fringilla. Nam ornare ex ligula, in lobortis velit sodales
            nec. Phasellus pharetra aliquet euismod. Proin sit amet tristique
            nibh, quis aliquet erat. In maximus porttitor suscipit. Fusce sit
            amet massa dictum, rutrum nisi eget, pellentesque velit. Nulla id
            augue est. Quisque ornare leo sed ullamcorper aliquam. Sed elementum
            diam eu sollicitudin malesuada. Praesent id diam in diam
            sollicitudin commodo eu nec purus. Curabitur vulputate sollicitudin
            iaculis. Praesent hendrerit ipsum tortor, vitae semper magna aliquet
            non. Aenean id ultricies ligula. Morbi vel varius metus.
          </p>
          <p>
            Nulla magna dolor, dictum quis sem sit amet, luctus iaculis felis.
            Nullam vehicula scelerisque metus, in blandit diam mollis non. Donec
            sed placerat dolor, vel dignissim purus. In nulla sem, fringilla vel
            lacus ut, consectetur dictum nisi. Etiam condimentum ante erat, sed
            sagittis elit vulputate sit amet. In id eros neque. Phasellus
            gravida quis urna ac interdum. Integer iaculis ante id neque
            porttitor, sit amet pharetra ante euismod. Quisque ornare in diam
            quis sagittis. Donec sit amet erat felis. Phasellus porttitor turpis
            at condimentum elementum. Phasellus mauris nibh, hendrerit sed quam
            vitae, accumsan suscipit nisi.
          </p>
          <p>
            Sed interdum vitae turpis elementum accumsan. Mauris purus nunc,
            hendrerit vel fermentum et, blandit ac tellus. Phasellus eu justo at
            quam vulputate euismod. Maecenas ultricies ante vitae leo luctus
            ultricies. Duis nec nunc vehicula, imperdiet tellus eu, porttitor
            sem. Cras blandit pharetra nisl nec facilisis. Nulla laoreet
            scelerisque nulla eu dapibus. Donec tortor nunc, pharetra nec
            lobortis eu, euismod ut magna. Phasellus consectetur nunc ut sem
            volutpat congue.
          </p>
          <p>
            Suspendisse elementum tortor justo, at facilisis felis blandit et.
            Sed eget velit sollicitudin, viverra turpis sed, egestas justo.
            Pellentesque aliquet leo ac diam varius, a tincidunt est viverra.
            Integer faucibus pellentesque felis, in rutrum neque aliquam in.
            Maecenas quis risus iaculis, ultricies ipsum vel, eleifend lorem.
            Donec efficitur, sem vel auctor posuere, mi neque sollicitudin
            dolor, vitae porta nulla eros ac urna. Suspendisse vulputate
            lobortis lectus. Phasellus vitae turpis nisi. Ut porttitor accumsan
            odio mattis tristique. Aenean ac turpis eget urna ornare venenatis.
            In posuere libero diam, a feugiat massa aliquet vel. Maecenas
            sollicitudin diam a eros viverra, et commodo arcu congue. Nunc
            dapibus justo non posuere volutpat. Sed nunc elit, ultrices non
            justo ut, feugiat ullamcorper urna. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Pellentesque mollis nisl at hendrerit condimentum.
          </p>
          <p>
            Phasellus in sollicitudin libero. Maecenas faucibus rutrum dictum.
            Curabitur semper, lorem eu aliquet iaculis, risus magna lobortis
            ante, viverra varius dolor tortor sit amet velit. Sed ut arcu
            iaculis, malesuada nisl et, lacinia sapien. Nunc volutpat placerat
            molestie. Aliquam erat volutpat. Nulla consequat nibh quis tellus
            vulputate scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
