// For waiting later
function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const texts = [
  `Cliche vinyl aesthetic cloud bread. Tacos tilde tousled typewriter chillwave, church-key squid scenester pug street art. Raclette disrupt stumptown, bespoke live-edge slow-carb quinoa. You probably haven't heard of them readymade echo park, meh wolf seitan chambray flexitarian. Banh mi actually sriracha offal, iceland four loko hexagon tumblr slow-carb flannel. Distillery XOXO franzen humblebrag wolf. Swag ugh lumbersexual snackwave, messenger bag vape VHS poke brunch. Banh mi green juice schlitz, raw denim vice austin church-key crucifix meditation yr messenger bag ethical. Seitan tofu af cold-pressed. Chambray swag cold-pressed 90's tacos, microdosing palo santo pork belly marfa succulents enamel pin locavore kombucha lo-fi fixie. Hexagon try-hard hashtag live-edge fixie art party. Health goth synth chicharrones meditation, tacos subway tile waistcoat intelligentsia.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac dui scelerisque, rutrum magna non, rutrum erat. Nullam sapien augue, lobortis at elit sit amet, fermentum sagittis ligula. Proin molestie condimentum gravida. Aliquam auctor in mi volutpat ullamcorper. Donec maximus, eros eu suscipit porttitor, augue dui bibendum magna, nec varius massa lectus id odio. Cras molestie nunc vitae felis gravida elementum. Aenean eget massa eu nisi ultricies rhoncus sed non augue. Ut dignissim, nunc a accumsan volutpat, ante risus porta felis, vitae vehicula magna elit at libero. Suspendisse potenti. Donec vulputate nulla nulla, et vestibulum mi molestie quis. Proin varius, purus id interdum malesuada, arcu tortor laoreet tellus, sit amet rutrum justo velit non diam. Sed felis tortor, elementum sed risus eu, interdum consectetur purus.`,
];
