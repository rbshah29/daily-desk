<template>
  <div class="min-h-screen bg-[#f7f8fc]">
    <LayoutDeskSidebar />

    <main class="min-w-0 lg:pl-64">
      <LayoutDeskHeader />

      <section class="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-10">
        <slot />
      </section>
    </main>

    <LayoutDeskMobileNav />
  </div>
</template>
