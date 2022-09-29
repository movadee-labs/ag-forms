import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-custom-input',
  template: `
	<h1 class="text-3xl font-bold underline">
		Input:
	</h1>
	<div>
  <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
  <div class="relative mt-1 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <input type="text" [formControl]="control" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>

  <!-- <input [formControl]="control"/> -->
  `,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
	public control: FormControl;
}
