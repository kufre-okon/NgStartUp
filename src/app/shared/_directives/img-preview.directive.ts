import { Directive, Input, ElementRef, AfterViewInit, SimpleChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[img-preview]'
})
export class ImgPreviewDirective implements OnInit {

  @Input() file: File;
  @Input() imageSrc: string;
  @Input() maxHeight: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.createImgEle();
  }

  createImgEle() {
    var img = document.createElement('img');
    img.style.maxHeight = this.maxHeight;
    this.el.nativeElement.appendChild(img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file'] || changes['imageSrc']) {
      if (this.file)
        this.setDataURISrc(this.file);
      else if (this.imageSrc)
        this.setSrc(this.imageSrc);
    }
  }


  setDataURISrc(file: any) {
    var reader = new FileReader();
    if (typeof (reader) !== 'undefined') {
      reader.onload = (e) => {
        this.setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else
      console.error('Browser does not support FileReader');
  }

  setSrc(src: any) {
    this.el.nativeElement.getElementsByTagName('img')[0].setAttribute('src', src);
  }
}
