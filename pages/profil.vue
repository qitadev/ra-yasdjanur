<template>
  <section class="max-w-5xl mx-auto px-5 py-8 lg:py-8">
    <div id="breadcrumbs" class="flex items-center">
      <nuxt-link to="/" class="text-gray-400">
        <span>Home</span>
      </nuxt-link>
      <div class="mx-4">
        <span class="text-gray-400"> > </span>
      </div>
      <nuxt-link to="#">
        <span class="border border-brand-primary rounded-full py-1 px-3 text-brand-primary">Profil</span>
      </nuxt-link>
    </div>
    <article class="w-full mt-8">
      <h1 class="text-4xl font-bold">
        Profil
      </h1>
      <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
      <section id="sejarah">
        <h2 class="text-xl text-gray-600 font-semibold">
          Sejarah singkat
        </h2>
        <p class="mt-4 font-extralight">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          <br>
          <br>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like)
        </p>
      </section>
    </article>
    <article class="w-full mt-8">
      <h1 class="text-4xl font-bold">
        Visi & Misi
      </h1>
      <hr class="w-20 border-2 border-brand-primary mt-4 mb-8">
      <section id="visi">
        <h2 class="text-xl text-gray-600 font-semibold">
          Visi
        </h2>
        <p class="mt-4 font-extralight">
          “Membentuk generasi penerus bangsa yang berkualitas secara aqidah, akhlakul kharimah, cerdas, kreatif, inovatif, mandiri dan berjiwa sosial.”
        </p>
      </section>
      <section id="misi" class="mt-8">
        <h2 class="text-xl text-gray-600 font-semibold">
          Misi
        </h2>
        <p class="mt-4 font-extralight">
          Berdasarkan visi tersebut, maka yang akan dilakukan oleh Raudatul Atfal Yasdjanurm untuk mewujudkan visi tersebut adalah tertuang dalam Misi sebagai berikut, yaitu:
        </p>
        <ul class="list-decimal px-8 py-4">
          <li>Turut serta menumbuhkan, meningkatkan dan mengembangkan kepedulian sosial dalam rangka menunjang program wajib belajar sembilan tahun.</li>
          <li>Sebagai wadah pembelajaran dan serta pembentukan karakter islam dalam kehidupan anak didik diusia dini.</li>
          <li>Mempersiapkan anak didik dalam persiapan menuju jenjang pendidikan dasar yang lebih tinggi, agar menjadi anak didik yang siap menghadapi tantangan masa depan yang gemilang.</li>
          <li>Menerapkan pola dasar pemikiran yang agresif, kritis, kreatif, dan komunikatif.</li>
          <li>Mampu bersaing dalam segala hal untuk menghadapi persaingan secara sehat, jujur, dan adil dalam berkompetisi meraih cita-cita yang cemerlang.</li>
        </ul>
      </section>
      <section id="tujuan" class="mt-8">
        <h2 class="text-xl text-gray-600 font-semibold">
          Tujuan
        </h2>
        <ul class="list-decimal px-8 py-4">
          <li>Dapat menjadi sekolah favorit, yang dikenal masyarakat, dengan program “Character Building” & “Full Day School” nya.</li>
          <li>Mencetak generasi anak didik yang mempunyai karakter islami, yang cerdas pikir, cerdas hati, cerdas raga dan cerdas rasa.</li>
        </ul>
      </section>
    </article>
  </section>
</template>
