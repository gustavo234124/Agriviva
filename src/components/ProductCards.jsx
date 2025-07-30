// src/components/ProductCards.jsx
import { useState } from "react";

export default function ProductCards() {
  return (
    <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
      <div className="mx-auto max-w-15xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Card 1 */}
          <div className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-gray-300 border-2 border-black rounded-4xl p-6 h-64">
            {/* Contenido vacío por ahora */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam quod ab illum alias quam corporis molestias ullam, repudiandae eligendi! Dignissimos doloribus quia ratione tempore perspiciatis dolor commodi, quaerat deleniti.
          </div>

          {/* Card 2 */}
          <div className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-gray-300 border-2 border-black rounded-4xl p-6 h-64">
            {/* Contenido vacío por ahora */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed aliquam exercitationem mollitia, est harum vero tempora animi accusamus consequuntur excepturi quam? Fugit culpa sit enim et aspernatur temporibus aliquam.
          </div>

          {/* Card 3 */}
          <div className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-gray-300 border-2 border-black rounded-4xl p-6 h-64">
            {/* Contenido vacío por ahora */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, accusamus iure expedita autem id, obcaecati asperiores facere esse doloremque repudiandae nobis vitae? Eos dolores sunt inventore ratione error architecto odit?
          </div>
        </dl>
      </div>
    </div>
  );
}
