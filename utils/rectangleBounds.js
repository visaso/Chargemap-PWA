module.exports = (topRight, bottomLeft) => (
    {
      type: 'Polygon',
      coordinates: [
        [
          [bottomLeft.lng, bottomLeft.lat],
          [bottomLeft.lng, topRight.lat],
          [topRight.lng, topRight.lat],
          [topRight.lng, bottomLeft.lat],
          [bottomLeft.lng, bottomLeft.lat],
        ],
      ],
    }
);
