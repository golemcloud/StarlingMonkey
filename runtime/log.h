#ifndef JS_COMPUTE_RUNTIME_LOG_H
#define JS_COMPUTE_RUNTIME_LOG_H

#ifndef DEBUG_LOGGING
#define DEBUG_LOGGING false
#endif

#if DEBUG_LOGGING
#define LOG(...)                                                                                   \
  {                                                                                                \
    fprintf(stderr, __VA_ARGS__);                                                                  \
    fprintf(stderr, "\n");                                                                         \
    fflush(stderr);                                                                                \
  }
#else
#define LOG(...)
#endif

#endif