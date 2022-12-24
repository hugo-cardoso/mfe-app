<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";

type Props = {
  id: string;
  urlScript: string;
  urlStyle?: string;
  props?: Record<string, unknown>;
};

const props = defineProps<Props>();

const wrapper = ref<HTMLDivElement>();

const loadScript = async () => {
  return new Promise((resolve) => {
    const scriptElement = document.createElement("script");
    scriptElement.src = props.urlScript;

    scriptElement.onload = () => {
      resolve(true);
    };

    document.body.appendChild(scriptElement);
  });
};

const loadStyle = async () => {
  return new Promise((resolve) => {
    if (!props.urlStyle) {
      resolve(true);
      return;
    }

    const styleElement = document.createElement("link");
    styleElement.href = props.urlStyle;
    styleElement.rel = "stylesheet";

    styleElement.onload = () => {
      resolve(true);
    };

    document.head.appendChild(styleElement);
  });
};

const mountMicroFrontEnd = async (id: string) => {
  if (!(window as any)[id]) {
    await Promise.all([loadScript(), loadStyle()]);
  }

  const microFrontEnd = (window as any)[id];

  microFrontEnd.mount(wrapper.value, props.props || {});
};

const unmountMicroFrontEnd = (id: string) => {
  const microFrontEnd = (window as any)[id];

  microFrontEnd.unmount();
};

watch(
  () => ({ ...props }),
  (newProps, oldProps) => {
    unmountMicroFrontEnd(oldProps.id);

    nextTick(() => {
      mountMicroFrontEnd(newProps.id);
    });
  },
  {
    deep: true,
  }
);

onMounted(() => {
  mountMicroFrontEnd(props.id);
});

onBeforeUnmount(() => {
  unmountMicroFrontEnd(props.id);
});
</script>

<template>
  <div ref="wrapper"></div>
</template>
