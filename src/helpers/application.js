export const translate = (t, model, view) => {
  return {
    title: t(`views.${model}.${view}.title`),
    subitle: t(`views.${model}.${view}.subtitle`),
    model: (attr) => t(`models.${model}.${attr}`)
  }
}
